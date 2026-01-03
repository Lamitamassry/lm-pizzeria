/**
 * About Page Component
 * Tells the story of LM Pizzeria and our culinary philosophy
 */
const About = () => {
    return (
        <div className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                        About <span className="text-accent-rose">LM Pizzeria</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Where passion for authentic Italian craftsmanship meets modern luxury dining.
                    </p>
                </div>

                {/* Story Section */}
                <div className="card p-8 md:p-12 mb-12">
                    <h2 className="text-3xl font-display font-bold text-gray-100 mb-6 text-center md:text-left">
                        Our <span className="text-accent-rose">Story</span>
                    </h2>
                    <div className="space-y-6 text-gray-400 leading-relaxed">
                        <p>
                            LM Pizzeria was born from a dream of creating a sophisticated pizza experience
                            that celebrates both tradition and innovation. After years of perfecting the craft in
                            renowned Italian kitchens across Europe, our founders returned home with a vision: to build
                            a luxury pizzeria that doesn&apos;t compromise on quality or atmosphere.
                        </p>
                        <p>
                            Our restaurant embodies the essence of modern elegance - dark, intimate interiors punctuated
                            by rose and gold accents create the perfect backdrop for an unforgettable dining experience.
                            Every detail, from the custom-built wood-fired ovens to the carefully curated playlist,
                            has been thoughtfully designed to transport you to a world where pizza is art.
                        </p>
                        <p>
                            At LM Pizzeria, we believe that exceptional food deserves an exceptional setting. We&apos;ve
                            reimagined the traditional pizzeria as a chic urban lounge where friends gather, couples
                            celebrate, and pizza lovers discover new favorites. This is pizza, elevated.
                        </p>
                    </div>
                </div>

                {/* Why Choose LM Pizzeria Section */}
                <div className="mb-16">
                    <h2 className="text-4xl font-display font-bold text-center text-gray-100 mb-12">
                        Why Choose <span className="text-accent-rose">LM Pizzeria</span>?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Reason 1 */}
                        <div className="card p-8 hover:border-accent-rose/50 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-rose to-accent-pink flex items-center justify-center flex-shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-display font-semibold text-gray-100 mb-3">
                                        Slow-Fermented Dough
                                    </h3>
                                    <p className="text-gray-400">
                                        Our signature dough undergoes a 48-hour cold fermentation process, resulting in
                                        a perfectly airy, digestible, and flavorful crust that's crispy on the outside
                                        and tender within.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Reason 2 */}
                        <div className="card p-8 hover:border-accent-rose/50 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-rose to-accent-pink flex items-center justify-center flex-shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-white"
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
                                <div>
                                    <h3 className="text-xl font-display font-semibold text-gray-100 mb-3">
                                        Premium Ingredients Only
                                    </h3>
                                    <p className="text-gray-400">
                                        We source San Marzano tomatoes from Italy, use only the finest mozzarella di bufala,
                                        and import specialty ingredients like truffle oil and premium meats to ensure
                                        every bite is extraordinary.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Reason 3 */}
                        <div className="card p-8 hover:border-accent-rose/50 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-rose to-accent-pink flex items-center justify-center flex-shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-white"
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
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-display font-semibold text-gray-100 mb-3">
                                        Artisan Wood-Fired Ovens
                                    </h3>
                                    <p className="text-gray-400">
                                        Our custom-built Italian wood-fired ovens reach temperatures of 900°F, creating
                                        that perfect leopard-spotted char and smoky flavor that can't be replicated
                                        in conventional ovens.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Reason 4 */}
                        <div className="card p-8 hover:border-accent-rose/50 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-rose to-accent-pink flex items-center justify-center flex-shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-display font-semibold text-gray-100 mb-3">
                                        Chef-Driven Innovation
                                    </h3>
                                    <p className="text-gray-400">
                                        Our head chef constantly experiments with seasonal ingredients and global flavors,
                                        creating unique signature pizzas that you won't find anywhere else while
                                        respecting traditional techniques.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Head Chef Section */}
                <div className="card p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Image placeholder */}
                        <div className="h-80 bg-gradient-to-br from-charcoal-light to-charcoal-dark rounded-lg flex items-center justify-center border border-charcoal-light">
                            <div className="text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-24 w-24 mx-auto text-accent-rose/30 mb-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                                <p className="text-gray-500 font-semibold">Head Chef</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="text-3xl font-display font-bold text-gray-100 mb-4">
                                Meet <span className="text-accent-rose">Our Chef</span>
                            </h2>
                            <div className="space-y-4 text-gray-400 leading-relaxed">
                                <p>
                                    With over 15 years of culinary experience spanning Michelin-starred restaurants
                                    and traditional pizzerias across Naples, Rome, and Milan, our head chef brings a
                                    unique perspective to pizza-making.
                                </p>
                                <p>
                                    &quot;Pizza is the most democratic food,&quot; our chef says, &quot;but that doesn&apos;t mean it
                                    can&apos;t be luxurious. My goal is to honor tradition while creating something
                                    unexpected - pizzas that surprise and delight with every bite.&quot;
                                </p>
                                <p>
                                    Our chef&apos;s philosophy is simple: use the best ingredients, respect the process,
                                    and never stop innovating. This dedication has earned LM Pizzeria recognition as
                                    one of the city&apos;s premier dining destinations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Philosophy Quote */}
                <div className="mt-16 text-center">
                    <blockquote className="text-2xl md:text-3xl font-display italic text-gray-300 max-w-3xl mx-auto">
                        &quot;Every pizza tells a story. At LM Pizzeria, we&apos;re writing new chapters in the art of
                        pizza-making, one handcrafted slice at a time.&quot;
                    </blockquote>
                    <p className="text-accent-rose mt-6 font-semibold">— Head Chef</p>
                </div>
            </div>
        </div>
    );
};

export default About;
