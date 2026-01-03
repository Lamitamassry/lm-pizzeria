import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

/**
 * Orders Page
 * Displays all orders for the logged-in user
 */
function Orders() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        const token = localStorage.getItem('token');
        
        if (!token) {
            navigate('/login');
            return;
        }

        try {
            const response = await fetch(`${API_URL}/api/orders`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.status === 401) {
                // Token expired or invalid
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                navigate('/login');
                return;
            }

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to fetch orders');
            }

            setOrders(data.orders || []);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (orderId) => {
        if (!window.confirm('Are you sure you want to delete this order?')) {
            return;
        }

        const token = localStorage.getItem('token');

        try {
            const response = await fetch(`${API_URL}/api/orders/${orderId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || 'Failed to delete order');
            }

            // Remove order from state
            setOrders(orders.filter(order => order.id !== orderId));
        } catch (err) {
            alert('Error deleting order: ' + err.message);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const formatOrderType = (type) => {
        const types = {
            'dine-in': 'Dine In',
            'takeaway': 'Takeaway',
            'delivery': 'Delivery'
        };
        return types[type] || type;
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-300 text-xl">Loading your orders...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-rose-400 mb-8">My Orders</h1>

                {error && (
                    <div className="bg-red-900/30 border border-red-500 text-red-200 px-4 py-3 rounded mb-6">
                        {error}
                    </div>
                )}

                {orders.length === 0 ? (
                    <div className="bg-gray-800 rounded-lg p-12 text-center border border-rose-900/30">
                        <p className="text-gray-400 text-xl mb-6">
                            You haven't placed any orders yet
                        </p>
                        <Link
                            to="/menu"
                            className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded transition duration-300"
                        >
                            Browse Menu
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {orders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-gray-800 rounded-lg p-6 border border-rose-900/30 hover:border-rose-700/50 transition"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-rose-400">
                                            Order #{order.id}
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            {formatDate(order.created_at)}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <span className="inline-block bg-rose-900/30 text-rose-300 px-3 py-1 rounded text-sm">
                                            {formatOrderType(order.order_type)}
                                        </span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <p className="text-gray-400 text-sm">Customer</p>
                                        <p className="text-white">{order.name}</p>
                                        <p className="text-gray-300">{order.phone}</p>
                                    </div>
                                    {order.address && (
                                        <div>
                                            <p className="text-gray-400 text-sm">Delivery Address</p>
                                            <p className="text-white">{order.address}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="border-t border-gray-700 pt-4 mb-4">
                                    <h4 className="text-gray-400 text-sm mb-2">Items</h4>
                                    <div className="space-y-2">
                                        {JSON.parse(order.items).map((item, index) => (
                                            <div key={index} className="flex justify-between text-gray-300">
                                                <span>
                                                    {item.quantity}x {item.name}
                                                </span>
                                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-between items-center border-t border-gray-700 pt-4">
                                    <div className="text-xl font-bold text-rose-400">
                                        Total: ${parseFloat(order.total).toFixed(2)}
                                    </div>
                                    <button
                                        onClick={() => handleDelete(order.id)}
                                        className="bg-red-600/20 hover:bg-red-600/40 text-red-400 px-4 py-2 rounded transition duration-300"
                                    >
                                        Delete Order
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Orders;
