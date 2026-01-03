import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

/**
 * Cart & Checkout Page Component
 * Displays cart items and checkout form
 */
const Cart = () => {
    const navigate = useNavigate();
    const { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();

    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [orderType, setOrderType] = useState('Dine-In');
    const [checkoutForm, setCheckoutForm] = useState({
        name: '',
        phone: '',
        address: '',
        notes: '',
    });

    const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity < 1) return;
        updateQuantity(id, newQuantity);
    };

    const handleRemoveItem = (id) => {
        removeFromCart(id);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setCheckoutForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePlaceOrder = async (e) => {
        e.preventDefault();

        // Check if user is logged in
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Please login to place an order');
            navigate('/login');
            return;
        }

        const payload = {
            name: checkoutForm.name,
            phone: checkoutForm.phone,
            orderType: orderType.toLowerCase().replace(/\s+/g, '-'), // Convert to 'dine-in', 'takeaway', 'delivery'
            address: orderType === 'Delivery' ? checkoutForm.address : '',
            items: cartItems.map((it) => ({ name: it.name, price: it.price, quantity: it.quantity })),
            total: cartTotal,
        };

        const base = import.meta.env.VITE_API_URL || 'http://localhost:5000';

        try {
            const res = await fetch(`${base}/api/orders`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(payload),
            });

            if (res.status === 401) {
                // Token expired or invalid
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                alert('Your session has expired. Please login again.');
                navigate('/login');
                return;
            }

            if (!res.ok) {
                const err = await res.json().catch(() => null);
                throw new Error(err?.message || 'Failed to place order');
            }

            const data = await res.json();

            // Navigate to confirmation page with server response
            navigate('/order-confirmation', {
                state: {
                    orderDetails: {
                        ...data.order,
                    },
                },
            });

            // Clear cart after successful order
            clearCart();
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error(err);
            alert('There was a problem placing your order. Please try again.');
        }
    };

    // Empty cart state
    if (cartItems.length === 0 && !isCheckingOut) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center px-4">
                <div className="text-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-24 w-24 mx-auto text-accent-rose/30 mb-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                    <h1 className="text-4xl font-display font-bold text-gray-100 mb-4">
                        Your Cart is Empty
                    </h1>
                    <p className="text-gray-400 mb-8">
                        Add some delicious items from our menu to get started!
                    </p>
                    <button
                        onClick={() => navigate('/menu')}
                        className="px-8 py-4 bg-gradient-to-r from-accent-rose to-accent-pink text-white font-bold rounded-lg shadow-lg hover:shadow-accent-rose/50 transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Browse Menu
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
                        Your <span className="text-accent-rose">Cart</span>
                    </h1>
                    <p className="text-xl text-gray-400">
                        Review your order and proceed to checkout
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        <h2 className="text-2xl font-display font-semibold text-gray-100 mb-4">
                            Order Items ({cartItems.length})
                        </h2>

                        {cartItems.map((item) => (
                            <div key={item.id} className="card p-6">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    {/* Item image */}
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full sm:w-24 h-24 object-cover rounded-lg flex-shrink-0"
                                        />
                                    ) : (
                                        <div className="w-full sm:w-24 h-24 bg-gradient-to-br from-charcoal-light to-charcoal-dark rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-10 w-10 text-accent-rose/30"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1.5}
                                                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                                                />
                                            </svg>
                                        </div>
                                    )}

                                    {/* Item details */}
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-display font-semibold text-gray-100 mb-1">
                                            {item.name}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-2">{item.category}</p>
                                        <p className="text-accent-rose font-bold text-lg">
                                            ${item.price.toFixed(2)} each
                                        </p>
                                    </div>

                                    {/* Quantity controls and remove button */}
                                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4">
                                        <div className="flex items-center gap-3 bg-charcoal-light rounded-lg p-2">
                                            <button
                                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                className="w-8 h-8 rounded-md bg-charcoal hover:bg-accent-rose/20 text-gray-300 hover:text-accent-rose transition-colors duration-300"
                                                aria-label="Decrease quantity"
                                            >
                                                -
                                            </button>
                                            <span className="text-gray-100 font-semibold w-8 text-center">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                className="w-8 h-8 rounded-md bg-charcoal hover:bg-accent-rose/20 text-gray-300 hover:text-accent-rose transition-colors duration-300"
                                                aria-label="Increase quantity"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => handleRemoveItem(item.id)}
                                            className="text-gray-400 hover:text-accent-rose transition-colors duration-300"
                                            aria-label="Remove item"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                />
                                            </svg>
                                        </button>

                                        <div className="text-right sm:mt-auto">
                                            <p className="text-gray-500 text-sm">Subtotal</p>
                                            <p className="text-gray-100 font-bold text-lg">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary & Checkout */}
                    <div className="lg:col-span-1">
                        <div className="card p-6 sticky top-24">
                            <h2 className="text-2xl font-display font-semibold text-gray-100 mb-6">
                                Order Summary
                            </h2>

                            {/* Order totals */}
                            <div className="space-y-3 mb-6 pb-6 border-b border-charcoal-light">
                                <div className="flex justify-between text-gray-400">
                                    <span>Subtotal</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-400">
                                    <span>Tax (estimated)</span>
                                    <span>${(cartTotal * 0.08).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-xl font-bold text-gray-100 pt-3 border-t border-charcoal-light">
                                    <span>Total</span>
                                    <span className="text-accent-rose">
                                        ${(cartTotal * 1.08).toFixed(2)}
                                    </span>
                                </div>
                            </div>

                            {!isCheckingOut ? (
                                <div className="space-y-3">
                                    <button
                                        onClick={() => setIsCheckingOut(true)}
                                        className="w-full px-6 py-4 bg-gradient-to-r from-accent-rose to-accent-pink text-white font-bold rounded-lg shadow-lg hover:shadow-accent-rose/50 transform hover:-translate-y-0.5 transition-all duration-300"
                                    >
                                        Proceed to Checkout
                                    </button>
                                    <button
                                        onClick={() => navigate('/menu')}
                                        className="w-full px-6 py-3 bg-charcoal text-gray-100 font-semibold rounded-lg border-2 border-accent-rose/30 hover:border-accent-rose transition-all duration-300"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handlePlaceOrder} className="space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-100 mb-3">
                                        Checkout Details
                                    </h3>

                                    {/* Order Type */}
                                    <div>
                                        <label className="block text-gray-300 font-medium mb-2">
                                            Order Type *
                                        </label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {['Dine-In', 'Takeaway', 'Delivery'].map((type) => (
                                                <button
                                                    key={type}
                                                    type="button"
                                                    onClick={() => setOrderType(type)}
                                                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${orderType === type
                                                        ? 'bg-accent-rose text-white'
                                                        : 'bg-charcoal-light text-gray-300 hover:bg-charcoal'
                                                        }`}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Name */}
                                    <div>
                                        <label htmlFor="checkout-name" className="block text-gray-300 font-medium mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="checkout-name"
                                            name="name"
                                            value={checkoutForm.name}
                                            onChange={handleFormChange}
                                            required
                                            className="w-full px-4 py-2 bg-charcoal-light border border-charcoal-light rounded-lg text-gray-100 focus:outline-none focus:border-accent-rose focus:ring-2 focus:ring-accent-rose/20 transition-all duration-300"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="checkout-phone" className="block text-gray-300 font-medium mb-2">
                                            Phone *
                                        </label>
                                        <input
                                            type="tel"
                                            id="checkout-phone"
                                            name="phone"
                                            value={checkoutForm.phone}
                                            onChange={handleFormChange}
                                            required
                                            className="w-full px-4 py-2 bg-charcoal-light border border-charcoal-light rounded-lg text-gray-100 focus:outline-none focus:border-accent-rose focus:ring-2 focus:ring-accent-rose/20 transition-all duration-300"
                                        />
                                    </div>

                                    {/* Address (only for delivery) */}
                                    {orderType === 'Delivery' && (
                                        <div>
                                            <label htmlFor="checkout-address" className="block text-gray-300 font-medium mb-2">
                                                Delivery Address *
                                            </label>
                                            <input
                                                type="text"
                                                id="checkout-address"
                                                name="address"
                                                value={checkoutForm.address}
                                                onChange={handleFormChange}
                                                required={orderType === 'Delivery'}
                                                className="w-full px-4 py-2 bg-charcoal-light border border-charcoal-light rounded-lg text-gray-100 focus:outline-none focus:border-accent-rose focus:ring-2 focus:ring-accent-rose/20 transition-all duration-300"
                                            />
                                        </div>
                                    )}

                                    {/* Notes */}
                                    <div>
                                        <label htmlFor="checkout-notes" className="block text-gray-300 font-medium mb-2">
                                            Special Instructions
                                        </label>
                                        <textarea
                                            id="checkout-notes"
                                            name="notes"
                                            value={checkoutForm.notes}
                                            onChange={handleFormChange}
                                            rows="3"
                                            className="w-full px-4 py-2 bg-charcoal-light border border-charcoal-light rounded-lg text-gray-100 focus:outline-none focus:border-accent-rose focus:ring-2 focus:ring-accent-rose/20 transition-all duration-300 resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full px-6 py-4 bg-gradient-to-r from-accent-rose to-accent-pink text-white font-bold rounded-lg shadow-lg hover:shadow-accent-rose/50 transform hover:-translate-y-0.5 transition-all duration-300"
                                    >
                                        Place Order
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setIsCheckingOut(false)}
                                        className="w-full px-6 py-2 text-gray-400 hover:text-accent-rose transition-colors duration-300"
                                    >
                                        Back to Cart
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
