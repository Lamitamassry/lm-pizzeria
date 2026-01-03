import { Link } from 'react-router-dom';
import MenuItemCard from '../components/MenuItemCard';
import { getFeaturedItems } from '../data/menuData';

/**
 * Home Page Component
 * Landing page with hero section and featured pizzas
 */
const Home = () => {
    const featuredPizzas = getFeaturedItems();

    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark via-primary to-charcoal opacity-90"></div>

                {/* Decorative elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-accent-rose/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl animate-pulse delay-700"></div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
                        <span className="bg-gradient-to-r from-accent-rose via-accent-pink to-accent-gold bg-clip-text text-transparent">
                            LM Pizzeria
                        </span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-200 font-display italic mb-8 mt-6">
                        "Handcrafted Fire Baked Luxury."
                    </p>
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                        Experience gourmet pizzas crafted with premium ingredients, slow-fermented dough,
                        and fired to perfection in our artisan ovens.
                    </p>
                    <Link
                        to="/menu"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-accent-rose to-accent-pink text-white font-bold text-lg rounded-lg shadow-2xl hover:shadow-accent-rose/50 transform hover:-translate-y-1 transition-all duration-300"
                    >
                        View Menu
                    </Link>
                </div>
            </section>

            {/* Featured Pizzas Section */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-100 mb-4">
                        Featured <span className="text-accent-rose">Creations</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Discover our signature pizzas, handcrafted with passion and the finest ingredients.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredPizzas.map((pizza) => (
                        <MenuItemCard key={pizza.id} item={pizza} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/menu"
                        className="inline-block px-6 py-3 bg-charcoal text-gray-100 font-semibold rounded-lg border-2 border-accent-rose/30 hover:border-accent-rose hover:shadow-lg hover:shadow-accent-rose/30 transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Explore Full Menu
                    </Link>
                </div>
            </section>

            {/* The Experience Section */}
            <section className="py-20 px-4 bg-charcoal-dark/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-100 mb-4">
                            The LM Pizzeria <span className="text-accent-rose">Experience</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Where luxury meets comfort in every bite. A modern pizza lounge
                            designed for the discerning palate.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature Card 1 */}
                        <div className="card text-center p-8 hover:border-accent-rose/50 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-accent-rose to-accent-pink rounded-full flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-display font-semibold text-gray-100 mb-3">
                                Premium Ingredients
                            </h3>
                            <p className="text-gray-400">
                                Only the finest imported and locally-sourced ingredients make it to our kitchen.
                            </p>
                        </div>

                        {/* Feature Card 2 */}
                        <div className="card text-center p-8 hover:border-accent-rose/50 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-accent-rose to-accent-pink rounded-full flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-display font-semibold text-gray-100 mb-3">
                                Fire-Baked Perfection
                            </h3>
                            <p className="text-gray-400">
                                Our artisan wood-fired ovens create the perfect crispy yet tender crust every time.
                            </p>
                        </div>

                        {/* Feature Card 3 */}
                        <div className="card text-center p-8 hover:border-accent-rose/50 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-accent-rose to-accent-pink rounded-full flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-display font-semibold text-gray-100 mb-3">
                                Luxury Ambiance
                            </h3>
                            <p className="text-gray-400">
                                Dark, elegant interiors with a modern touch - perfect for date nights and celebrations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center card p-12">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-100 mb-4">
                        Ready to Experience <span className="text-accent-rose">Luxury Pizza</span>?
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Visit us today or order online for delivery and takeaway.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/menu"
                            className="px-8 py-4 bg-gradient-to-r from-accent-rose to-accent-pink text-white font-bold rounded-lg shadow-lg hover:shadow-accent-rose/50 transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Order Now
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-charcoal text-gray-100 font-semibold rounded-lg border-2 border-accent-rose/30 hover:border-accent-rose hover:shadow-lg hover:shadow-accent-rose/30 transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Make a Reservation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
