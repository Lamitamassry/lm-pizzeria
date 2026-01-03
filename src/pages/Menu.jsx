import { useState } from 'react';
import MenuItemCard from '../components/MenuItemCard';
import { menuData } from '../data/menuData';

/**
 * Menu Page Component
 * Displays all menu items grouped by category with filtering
 */
const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    // Get all items based on selected category
    const getFilteredItems = () => {
        if (activeCategory === 'All') {
            return [
                ...menuData.pizzas,
                ...menuData.sides,
                ...menuData.desserts,
                ...menuData.drinks,
            ];
        }
        return menuData[activeCategory.toLowerCase()] || [];
    };

    const filteredItems = getFilteredItems();

    // Category buttons
    const categories = ['All', 'Pizzas', 'Sides', 'Desserts', 'Drinks'];

    return (
        <div className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
                        Our <span className="text-accent-rose">Menu</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Explore our collection of handcrafted pizzas, gourmet sides, decadent desserts, and refreshing drinks.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeCategory === category
                                    ? 'bg-gradient-to-r from-accent-rose to-accent-pink text-white shadow-lg shadow-accent-rose/30'
                                    : 'bg-charcoal text-gray-300 border border-charcoal-light hover:border-accent-rose/50'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Menu Items Grid */}
                {filteredItems.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredItems.map((item) => (
                            <MenuItemCard key={item.id} item={item} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg">No items found in this category.</p>
                    </div>
                )}

                {/* Menu Info Section */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="card p-6 text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 mx-auto mb-4 text-accent-rose"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <h3 className="text-lg font-semibold text-gray-100 mb-2">Quick Service</h3>
                        <p className="text-gray-400 text-sm">
                            Most orders ready in 15-20 minutes. Fresh, fast, and made to order.
                        </p>
                    </div>

                    <div className="card p-6 text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 mx-auto mb-4 text-accent-rose"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        <h3 className="text-lg font-semibold text-gray-100 mb-2">Order Online</h3>
                        <p className="text-gray-400 text-sm">
                            Easy online ordering for delivery and takeaway. Track your order in real-time.
                        </p>
                    </div>

                    <div className="card p-6 text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 mx-auto mb-4 text-accent-rose"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                        </svg>
                        <h3 className="text-lg font-semibold text-gray-100 mb-2">Premium Quality</h3>
                        <p className="text-gray-400 text-sm">
                            Every item made with premium ingredients and attention to detail.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
