import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

/**
 * MenuItemCard Component
 * Reusable card component for displaying menu items
 * Used on Menu page and Featured sections
 */
const MenuItemCard = ({ item, showFullDescription = false }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(item);
    };

    return (
        <div className="card card-hover overflow-hidden group">
            {/* Image Section */}
            {item.image ? (
                <div className="h-48 overflow-hidden border-b border-charcoal-light group-hover:border-accent-rose/30 transition-all duration-300">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
            ) : (
                <div className="h-48 bg-gradient-to-br from-charcoal-light to-charcoal-dark flex items-center justify-center border-b border-charcoal-light group-hover:border-accent-rose/30 transition-all duration-300">
                    <div className="text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-16 mx-auto text-accent-rose/30 group-hover:text-accent-rose/50 transition-colors duration-300"
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
                        <p className="text-xs text-gray-500 mt-2 font-semibold">{item.category}</p>
                    </div>
                </div>
            )}

            {/* Content Section */}
            <div className="p-5">
                {/* Title */}
                <h3 className="text-xl font-display font-semibold text-gray-100 mb-2 group-hover:text-accent-pink transition-colors duration-300">
                    {item.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {showFullDescription ? item.fullDescription || item.description : item.description}
                </p>

                {/* Tags */}
                {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 text-xs font-medium bg-accent-rose/10 text-accent-rose border border-accent-rose/30 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Price and Actions */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-charcoal-light">
                    <span className="text-2xl font-bold text-accent-rose">
                        ${item.price.toFixed(2)}
                    </span>

                    <div className="flex gap-2">
                        <Link
                            to={`/menu/${item.id}`}
                            className="px-4 py-2 bg-charcoal-light hover:bg-charcoal text-gray-100 text-sm font-semibold rounded-lg border border-accent-rose/20 hover:border-accent-rose/50 transition-all duration-300"
                        >
                            Details
                        </Link>
                        <button
                            onClick={handleAddToCart}
                            className="px-4 py-2 bg-gradient-to-r from-accent-rose to-accent-pink text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-rose/50 transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItemCard;
