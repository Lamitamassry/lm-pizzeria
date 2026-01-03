import db from '../db/connection.js';

/**
 * Validate order data
 */
const validateOrderData = (data) => {
    const { name, phone, orderType, items, total } = data;
    const errors = [];

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
        errors.push('Name is required');
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length === 0) {
        errors.push('Phone number is required');
    }

    if (!orderType || !['dine-in', 'takeaway', 'delivery'].includes(orderType)) {
        errors.push('Order type must be: dine-in, takeaway, or delivery');
    }

    if (orderType === 'delivery' && (!data.address || data.address.trim().length === 0)) {
        errors.push('Delivery address is required for delivery orders');
    }

    if (!items || !Array.isArray(items) || items.length === 0) {
        errors.push('Order must contain at least one item');
    } else {
        items.forEach((item, index) => {
            if (!item.name || typeof item.name !== 'string') {
                errors.push(`Item ${index + 1}: name is required`);
            }
            if (typeof item.price !== 'number' || item.price <= 0) {
                errors.push(`Item ${index + 1}: valid price is required`);
            }
            if (typeof item.quantity !== 'number' || item.quantity < 1) {
                errors.push(`Item ${index + 1}: quantity must be at least 1`);
            }
        });
    }

    if (typeof total !== 'number' || total <= 0) {
        errors.push('Valid total amount is required');
    }

    return errors;
};

/**
 * Create a new order (requires authentication)
 * POST /api/orders
 */
export const createOrder = async (req, res) => {
    try {
        const userId = req.user.id;
        const { name, phone, orderType, address, items, total } = req.body;

        // Validate input
        const validationErrors = validateOrderData(req.body);
        if (validationErrors.length > 0) {
            return res.status(400).json({ 
                message: 'Validation failed', 
                details: validationErrors 
            });
        }

        // Start transaction
        const connection = await db.getConnection();
        await connection.beginTransaction();

        try {
            // Insert order
            const [orderResult] = await connection.query(
                `INSERT INTO orders (user_id, name, phone, order_type, address, total) 
                 VALUES (?, ?, ?, ?, ?, ?)`,
                [
                    userId,
                    name.trim(),
                    phone.trim(),
                    orderType,
                    orderType === 'delivery' ? (address || '').trim() : null,
                    total
                ]
            );

            const orderId = orderResult.insertId;

            // Insert order items
            const itemValues = items.map(item => [
                orderId,
                item.name,
                item.price,
                item.quantity
            ]);

            await connection.query(
                'INSERT INTO order_items (order_id, item_name, item_price, quantity) VALUES ?',
                [itemValues]
            );

            await connection.commit();
            connection.release();

            // Fetch the complete order with items
            const [orders] = await db.query(
                `SELECT o.*, 
                    JSON_ARRAYAGG(
                        JSON_OBJECT(
                            'id', oi.id,
                            'name', oi.item_name,
                            'price', oi.item_price,
                            'quantity', oi.quantity
                        )
                    ) as items
                 FROM orders o
                 LEFT JOIN order_items oi ON o.id = oi.order_id
                 WHERE o.id = ?
                 GROUP BY o.id`,
                [orderId]
            );

            return res.status(201).json({
                message: 'Order created successfully',
                order: orders[0]
            });

        } catch (error) {
            await connection.rollback();
            connection.release();
            throw error;
        }

    } catch (error) {
        console.error('Create order error:', error);
        return res.status(500).json({ 
            message: 'Error creating order',
            details: 'Please try again later'
        });
    }
};

/**
 * Get all orders for the logged-in user
 * GET /api/orders
 */
export const getOrders = async (req, res) => {
    try {
        const userId = req.user.id;

        const [orders] = await db.query(
            `SELECT o.id, o.name, o.phone, o.order_type, o.address, o.total, 
                    o.created_at, o.updated_at,
                    JSON_ARRAYAGG(
                        JSON_OBJECT(
                            'id', oi.id,
                            'name', oi.item_name,
                            'price', oi.item_price,
                            'quantity', oi.quantity
                        )
                    ) as items
             FROM orders o
             LEFT JOIN order_items oi ON o.id = oi.order_id
             WHERE o.user_id = ?
             GROUP BY o.id
             ORDER BY o.created_at DESC`,
            [userId]
        );

        return res.status(200).json({
            orders
        });

    } catch (error) {
        console.error('Get orders error:', error);
        return res.status(500).json({ 
            message: 'Error fetching orders' 
        });
    }
};

/**
 * Get a single order by ID
 * GET /api/orders/:id
 */
export const getOrderById = async (req, res) => {
    try {
        const userId = req.user.id;
        const orderId = req.params.id;

        const [orders] = await db.query(
            `SELECT o.*, 
                    JSON_ARRAYAGG(
                        JSON_OBJECT(
                            'id', oi.id,
                            'name', oi.item_name,
                            'price', oi.item_price,
                            'quantity', oi.quantity
                        )
                    ) as items
             FROM orders o
             LEFT JOIN order_items oi ON o.id = oi.order_id
             WHERE o.id = ? AND o.user_id = ?
             GROUP BY o.id`,
            [orderId, userId]
        );

        if (orders.length === 0) {
            return res.status(404).json({ 
                message: 'Order not found' 
            });
        }

        return res.status(200).json({
            order: orders[0]
        });

    } catch (error) {
        console.error('Get order error:', error);
        return res.status(500).json({ 
            message: 'Error fetching order' 
        });
    }
};

/**
 * Update an order
 * PUT /api/orders/:id
 */
export const updateOrder = async (req, res) => {
    try {
        const userId = req.user.id;
        const orderId = req.params.id;
        const { name, phone, orderType, address } = req.body;

        // Check if order exists and belongs to user
        const [existingOrders] = await db.query(
            'SELECT id FROM orders WHERE id = ? AND user_id = ?',
            [orderId, userId]
        );

        if (existingOrders.length === 0) {
            return res.status(404).json({ 
                message: 'Order not found' 
            });
        }

        // Build update query dynamically
        const updates = [];
        const values = [];

        if (name) {
            updates.push('name = ?');
            values.push(name.trim());
        }
        if (phone) {
            updates.push('phone = ?');
            values.push(phone.trim());
        }
        if (orderType && ['dine-in', 'takeaway', 'delivery'].includes(orderType)) {
            updates.push('order_type = ?');
            values.push(orderType);
        }
        if (address !== undefined) {
            updates.push('address = ?');
            values.push(address ? address.trim() : null);
        }

        if (updates.length === 0) {
            return res.status(400).json({ 
                message: 'No valid fields to update' 
            });
        }

        values.push(orderId, userId);

        await db.query(
            `UPDATE orders SET ${updates.join(', ')} WHERE id = ? AND user_id = ?`,
            values
        );

        // Fetch updated order
        const [orders] = await db.query(
            `SELECT o.*, 
                    JSON_ARRAYAGG(
                        JSON_OBJECT(
                            'id', oi.id,
                            'name', oi.item_name,
                            'price', oi.item_price,
                            'quantity', oi.quantity
                        )
                    ) as items
             FROM orders o
             LEFT JOIN order_items oi ON o.id = oi.order_id
             WHERE o.id = ?
             GROUP BY o.id`,
            [orderId]
        );

        return res.status(200).json({
            message: 'Order updated successfully',
            order: orders[0]
        });

    } catch (error) {
        console.error('Update order error:', error);
        return res.status(500).json({ 
            message: 'Error updating order' 
        });
    }
};

/**
 * Delete an order
 * DELETE /api/orders/:id
 */
export const deleteOrder = async (req, res) => {
    try {
        const userId = req.user.id;
        const orderId = req.params.id;

        // Check if order exists and belongs to user
        const [existingOrders] = await db.query(
            'SELECT id FROM orders WHERE id = ? AND user_id = ?',
            [orderId, userId]
        );

        if (existingOrders.length === 0) {
            return res.status(404).json({ 
                message: 'Order not found' 
            });
        }

        // Delete order (order_items will be deleted automatically via CASCADE)
        await db.query(
            'DELETE FROM orders WHERE id = ? AND user_id = ?',
            [orderId, userId]
        );

        return res.status(200).json({
            message: 'Order deleted successfully'
        });

    } catch (error) {
        console.error('Delete order error:', error);
        return res.status(500).json({ 
            message: 'Error deleting order' 
        });
    }
};
