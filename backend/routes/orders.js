import express from 'express';
import { createOrder, getOrders, getOrderById, updateOrder, deleteOrder } from '../controllers/orderController.js';
import { authRequired } from '../middleware/auth.js';

const router = express.Router();

// All order routes require authentication
router.get('/', authRequired, getOrders);
router.post('/', authRequired, createOrder);
router.get('/:id', authRequired, getOrderById);
router.put('/:id', authRequired, updateOrder);
router.delete('/:id', authRequired, deleteOrder);

export default router;
