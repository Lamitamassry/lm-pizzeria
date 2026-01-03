import { useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getMenuItemById } from '../data/menuData';

/**
 * Menu Item Detail Page Component
 * Dynamic page that shows detailed information for a specific menu item
 */
const MenuItemDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    // Get the menu item by ID from URL parameter
    const item = getMenuItemById(id);

    // If item not found, show error message
    if (!item) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="text-4xl font-display font-bold text-gray-100 mb-4">
                        Item Not Found
                    </h1>
                    <p className="text-gray-400 mb-8">
                        Sorry, we couldn't find the menu item you're looking for.
                    </p>
                    <button
                        onClick={() => navigate('/menu')}
                        className="px-6 py-3 bg-gradient-to-r from-accent-rose to-accent-pink text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-rose/50 transition-all duration-300"
                    >
                        Back to Menu
                    </button>
                </div>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(item);
        // Optional: Show a brief notification
        alert(`${item.name} added to cart!`);
    };

    return (
        <div className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/menu')}
                    className="flex items-center gap-2 text-gray-400 hover:text-accent-rose transition-colors duration-300 mb-8"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Back to Menu
                </button>

                {/* Item Details Card */}
                <div className="card overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Image Section */}
                        {item.image ? (
                            <div className="h-96 lg:h-auto overflow-hidden border-b lg:border-b-0 lg:border-r border-charcoal-light">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ) : (
                            <div className="h-96 lg:h-auto bg-gradient-to-br from-charcoal-light to-charcoal-dark flex items-center justify-center border-b lg:border-b-0 lg:border-r border-charcoal-light">
                                <div className="text-center p-8">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-32 w-32 mx-auto text-accent-rose/30 mb-6"
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
                                    <p className="text-accent-rose font-semibold text-lg">{item.category}</p>
                                </div>
                            </div>
                        )}

                        {/* Content Section */}
                        <div className="p-8 lg:p-12">
                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-100 mb-4">
                                {item.name}
                            </h1>

                            {/* Tags */}
                            {item.tags && item.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {item.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-sm font-medium bg-accent-rose/10 text-accent-rose border border-accent-rose/30 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Description */}
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                {item.fullDescription || item.description}
                            </p>

                            {/* Additional Info */}
                            <div className="border-t border-charcoal-light pt-6 mb-8">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-gray-500 text-sm mb-1">Category</p>
                                        <p className="text-gray-200 font-semibold">{item.category}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm mb-1">Price</p>
                                        <p className="text-accent-rose text-3xl font-bold">
                                            ${item.price.toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 px-8 py-4 bg-gradient-to-r from-accent-rose to-accent-pink text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-accent-rose/50 transform hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    Add to Cart
                                </button>
                                <button
                                    onClick={() => navigate('/menu')}
                                    className="px-8 py-4 bg-charcoal text-gray-100 font-semibold rounded-lg border-2 border-accent-rose/30 hover:border-accent-rose hover:shadow-lg hover:shadow-accent-rose/30 transition-all duration-300"
                                >
                                    Continue Shopping
                                </button>
                            </div>

                            {/* Additional Features */}
                            <div className="mt-8 pt-8 border-t border-charcoal-light">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                    <div className="flex items-start gap-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-accent-rose flex-shrink-0 mt-0.5"
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
                                        <span className="text-gray-400">Made fresh to order</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-accent-rose flex-shrink-0 mt-0.5"
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
                                        <span className="text-gray-400">Premium ingredients</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-accent-rose flex-shrink-0 mt-0.5"
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
                                        <span className="text-gray-400">Available for delivery</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-accent-rose flex-shrink-0 mt-0.5"
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
                                        <span className="text-gray-400">Chef-recommended</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItemDetail;
