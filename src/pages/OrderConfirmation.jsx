import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Order Confirmation Page Component
 * Displays confirmation after successful order placement
 */
const OrderConfirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const orderDetails = location.state?.orderDetails;

    // Redirect to home if no order details
    useEffect(() => {
        if (!orderDetails) {
            navigate('/');
        }
    }, [orderDetails, navigate]);

    if (!orderDetails) {
        return null;
    }

    return (
        <div className="min-h-[70vh] py-16 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Success Message */}
                <div className="text-center mb-12">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent-rose to-accent-pink flex items-center justify-center animate-bounce">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-100 mb-4">
                        Order Confirmed!
                    </h1>
                    <p className="text-xl text-gray-400 mb-2">
                        Thank you for your order, {orderDetails.name}!
                    </p>
                    <p className="text-gray-500">
                        We've received your order and will prepare it shortly.
                    </p>
                </div>

                {/* Order Details Card */}
                <div className="card p-8 mb-8">
                    <h2 className="text-2xl font-display font-semibold text-gray-100 mb-6 pb-4 border-b border-charcoal-light">
                        Order Summary
                    </h2>

                    {/* Order Type & Contact */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 pb-6 border-b border-charcoal-light">
                        <div>
                            <p className="text-gray-500 text-sm mb-1">Order Type</p>
                            <p className="text-gray-100 font-semibold">{orderDetails.orderType}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm mb-1">Phone</p>
                            <p className="text-gray-100 font-semibold">{orderDetails.phone}</p>
                        </div>
                        {orderDetails.orderType === 'Delivery' && orderDetails.address && (
                            <div className="sm:col-span-2">
                                <p className="text-gray-500 text-sm mb-1">Delivery Address</p>
                                <p className="text-gray-100 font-semibold">{orderDetails.address}</p>
                            </div>
                        )}
                    </div>

                    {/* Items List */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-100 mb-4">Items Ordered</h3>
                        <div className="space-y-3">
                            {orderDetails.items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center py-3 border-b border-charcoal-light last:border-0"
                                >
                                    <div className="flex-grow">
                                        <p className="text-gray-100 font-medium">{item.name}</p>
                                        <p className="text-gray-500 text-sm">
                                            ${item.price.toFixed(2)} × {item.quantity}
                                        </p>
                                    </div>
                                    <p className="text-gray-100 font-semibold">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Total */}
                    <div className="space-y-2 pt-4 border-t border-charcoal-light">
                        <div className="flex justify-between text-gray-400">
                            <span>Subtotal</span>
                            <span>${orderDetails.total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-gray-400">
                            <span>Tax</span>
                            <span>${(orderDetails.total * 0.08).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-2xl font-bold text-gray-100 pt-2">
                            <span>Total</span>
                            <span className="text-accent-rose">
                                ${(orderDetails.total * 1.08).toFixed(2)}
                            </span>
                        </div>
                    </div>

                    {/* Special Instructions */}
                    {orderDetails.notes && (
                        <div className="mt-6 pt-6 border-t border-charcoal-light">
                            <p className="text-gray-500 text-sm mb-2">Special Instructions:</p>
                            <p className="text-gray-300 italic">{orderDetails.notes}</p>
                        </div>
                    )}
                </div>

                {/* Next Steps */}
                <div className="card p-6 mb-8">
                    <h3 className="text-xl font-display font-semibold text-gray-100 mb-4">
                        What's Next?
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-accent-rose/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-accent-rose font-bold text-sm">1</span>
                            </div>
                            <div>
                                <p className="text-gray-100 font-medium">Order Confirmation</p>
                                <p className="text-gray-400 text-sm">
                                    We&apos;ll send you a confirmation call/SMS shortly.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-accent-rose/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-accent-rose font-bold text-sm">2</span>
                            </div>
                            <div>
                                <p className="text-gray-100 font-medium">Preparation</p>
                                <p className="text-gray-400 text-sm">
                                    Our chefs will start preparing your order fresh.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-accent-rose/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-accent-rose font-bold text-sm">3</span>
                            </div>
                            <div>
                                <p className="text-gray-100 font-medium">
                                    {orderDetails.orderType === 'Delivery'
                                        ? 'Delivery'
                                        : orderDetails.orderType === 'Takeaway'
                                            ? 'Ready for Pickup'
                                            : 'Enjoy Your Meal'}
                                </p>
                                <p className="text-gray-400 text-sm">
                                    {orderDetails.orderType === 'Delivery'
                                        ? 'Your order will be delivered to your address.'
                                        : orderDetails.orderType === 'Takeaway'
                                            ? "We'll notify you when your order is ready for pickup."
                                            : 'Your table is ready. Enjoy your dining experience!'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => navigate('/')}
                        className="px-8 py-4 bg-gradient-to-r from-accent-rose to-accent-pink text-white font-bold rounded-lg shadow-lg hover:shadow-accent-rose/50 transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Back to Home
                    </button>
                    <button
                        onClick={() => navigate('/menu')}
                        className="px-8 py-4 bg-charcoal text-gray-100 font-semibold rounded-lg border-2 border-accent-rose/30 hover:border-accent-rose hover:shadow-lg hover:shadow-accent-rose/30 transition-all duration-300"
                    >
                        Order More
                    </button>
                </div>

                {/* Support Info */}
                <div className="text-center mt-12">
                    <p className="text-gray-500 text-sm">
                        Need help with your order? Contact us at{' '}
                        <a href="tel:5551234567" className="text-accent-rose hover:underline">
                            (555) 123-4567
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;
