// Menu data for LM Pizzeria - Luxury Pizzeria
// All menu items with detailed descriptions and pricing

// Import images
import bbqChickenUrban from '../images/bbq-chicken-urban.jpg';
import blushBurrataGarden from '../images/blush-burrata-garden.jpg';
import garlicBreadTwists from '../images/garlic-bread-twists.jpg';
import midnightBerryCooler from '../images/midnight-berry-cooler.jpg';
import midnightPepperoniHeat from '../images/midnight-pepperoni-heat.jpg';
import mozzarellaBites from '../images/mozzarella-bites.jpg';
import neonVeggieNight from '../images/neon-veggie-night.jpg';
import nutellaLavaPizza from '../images/nutella-lava-pizza.jpg';
import pinkSeaPrawnDelight from '../images/pink-sea-prawn-delight.jpg';
import rosePistachioPannacotta from '../images/rose-pistachio-pannacotta.jpg';
import sparklingRoseLemonade from '../images/sparkling-rose-lemonade.jpg';
import truffleFries from '../images/truffle-fries.jpg';
import truffleRoseBianca from '../images/truffle-rose-bianca.jpg';

export const menuData = {
    pizzas: [
        {
            id: 'pizza-1',
            name: 'Truffle Rose Bianca',
            description: 'Creamy white base, mozzarella, truffle oil, garlic, shaved parmesan, pink rock salt',
            fullDescription: 'An elegant white pizza with a luxurious creamy base, topped with premium mozzarella, aromatic truffle oil, roasted garlic, freshly shaved parmesan, and a sprinkle of pink Himalayan rock salt. A sophisticated choice for truffle lovers.',
            price: 24.99,
            category: 'Pizzas',
            tags: ['Signature', 'Veg Friendly', 'Premium'],
            image: truffleRoseBianca,
        },
        {
            id: 'pizza-2',
            name: 'Midnight Pepperoni Heat',
            description: 'Tomato base, double pepperoni, smoked mozzarella, chili oil drizzle',
            fullDescription: 'Our most popular pizza featuring a rich tomato base layered with double portions of premium pepperoni, smoky mozzarella cheese, and finished with a spicy chili oil drizzle. Perfect for those who love bold, fiery flavors.',
            price: 22.99,
            category: 'Pizzas',
            tags: ['Spicy', 'Best Seller', 'Crowd Favorite'],
            image: midnightPepperoniHeat,
        },
        {
            id: 'pizza-3',
            name: 'Blush Burrata Garden',
            description: 'Tomato-rose sauce, burrata, cherry tomatoes, basil, balsamic glaze',
            fullDescription: 'A fresh and elegant pizza with our signature tomato-rose sauce, creamy burrata cheese, sweet cherry tomatoes, fresh basil leaves, and a delicate balsamic glaze. Light, refreshing, and utterly delicious.',
            price: 26.99,
            category: 'Pizzas',
            tags: ['Fresh', 'Chef\'s Pick', 'Vegetarian'],
            image: blushBurrataGarden,
        },
        {
            id: 'pizza-4',
            name: 'Smoky Urban BBQ Chicken',
            description: 'BBQ base, grilled chicken, caramelized onions, smoked gouda',
            fullDescription: 'A hearty BBQ pizza with tender grilled chicken breast, sweet caramelized onions, and rich smoked gouda cheese on a tangy BBQ sauce base. Smoky, savory, and incredibly satisfying.',
            price: 23.99,
            category: 'Pizzas',
            tags: ['BBQ', 'Crowd Favorite', 'Protein Rich'],
            image: bbqChickenUrban,
        },
        {
            id: 'pizza-5',
            name: 'Pink Sea Prawn Delight',
            description: 'Creamy base, prawns, garlic, parmesan, lemon zest, pink peppercorn',
            fullDescription: 'An exquisite seafood pizza featuring succulent prawns on a velvety creamy base, enhanced with roasted garlic, aged parmesan, fresh lemon zest, and a hint of pink peppercorn for a sophisticated finish.',
            price: 28.99,
            category: 'Pizzas',
            tags: ['Seafood', 'Premium', 'Signature'],
            image: pinkSeaPrawnDelight,
        },
        {
            id: 'pizza-6',
            name: 'Neon Veggie Night',
            description: 'Tomato base, roasted peppers, olives, mushrooms, red onion, sweet corn',
            fullDescription: 'A colorful celebration of vegetables on a classic tomato base. Features roasted bell peppers, Kalamata olives, sautéed mushrooms, red onions, and sweet corn. Can be made vegan upon request.',
            price: 20.99,
            category: 'Pizzas',
            tags: ['Vegan Option', 'Vegetarian', 'Healthy Choice'],
            image: neonVeggieNight,
        },
    ],

    sides: [
        {
            id: 'side-1',
            name: 'Truffle Parmesan Fries',
            description: 'Crispy golden fries tossed with truffle oil, parmesan, and herbs',
            fullDescription: 'Hand-cut fries fried to golden perfection, tossed in premium truffle oil, and generously coated with freshly grated parmesan cheese and Italian herbs. An addictive luxury side.',
            price: 8.99,
            category: 'Sides',
            tags: ['Vegetarian', 'Popular', 'Signature'],
            image: truffleFries,
        },
        {
            id: 'side-2',
            name: 'Rose Garlic Bread Twists',
            description: 'Soft garlic bread twists with rose-infused butter and herbs',
            fullDescription: 'Freshly baked bread twists brushed with our signature rose-garlic butter, sprinkled with Italian herbs and sea salt. Served warm with marinara dipping sauce.',
            price: 6.99,
            category: 'Sides',
            tags: ['Vegetarian', 'Starter'],
            image: garlicBreadTwists,
        },
        {
            id: 'side-3',
            name: 'Crispy Mozzarella Bites',
            description: 'Golden fried mozzarella with marinara dipping sauce',
            fullDescription: 'Premium mozzarella cheese coated in seasoned breadcrumbs and fried until golden and crispy. Served with our house marinara sauce for dipping.',
            price: 7.99,
            category: 'Sides',
            tags: ['Vegetarian', 'Crowd Favorite'],
            image: mozzarellaBites,
        },
    ],

    desserts: [
        {
            id: 'dessert-1',
            name: 'Nutella Lava Pizza Slice',
            description: 'Warm pizza dough with molten Nutella center, powdered sugar',
            fullDescription: 'A decadent dessert pizza with a warm, fluffy dough filled with melted Nutella chocolate hazelnut spread. Dusted with powdered sugar and served with vanilla ice cream on the side.',
            price: 9.99,
            category: 'Desserts',
            tags: ['Sweet', 'Signature', 'Indulgent'],
            image: nutellaLavaPizza,
        },
        {
            id: 'dessert-2',
            name: 'Rose-Pistachio Panna Cotta',
            description: 'Silky Italian cream dessert with rose water and crushed pistachios',
            fullDescription: 'A silky smooth Italian panna cotta infused with delicate rose water and topped with crushed pistachios and a rose petal garnish. Elegant and not too sweet.',
            price: 8.99,
            category: 'Desserts',
            tags: ['Signature', 'Elegant', 'Vegetarian'],
            image: rosePistachioPannacotta,
        },
    ],

    drinks: [
        {
            id: 'drink-1',
            name: 'Sparkling Rose Lemonade',
            description: 'Refreshing lemonade with rose syrup and sparkling water',
            fullDescription: 'House-made lemonade blended with rose syrup and topped with sparkling water. Garnished with fresh mint and edible rose petals for a refreshing and Instagram-worthy drink.',
            price: 5.99,
            category: 'Drinks',
            tags: ['Refreshing', 'Signature', 'Non-Alcoholic'],
            image: sparklingRoseLemonade,
        },
        {
            id: 'drink-2',
            name: 'Midnight Berry Cooler',
            description: 'Dark berry blend with lime and a hint of mint',
            fullDescription: 'A bold mix of blackberries, blueberries, and raspberries blended with fresh lime juice and a hint of mint. Served over ice for the perfect cooling companion to our pizzas.',
            price: 6.99,
            category: 'Drinks',
            tags: ['Refreshing', 'Fruity', 'Non-Alcoholic'],
            image: midnightBerryCooler,
        },
    ],
};

// Get all menu items as a flat array
export const getAllMenuItems = () => {
    return [
        ...menuData.pizzas,
        ...menuData.sides,
        ...menuData.desserts,
        ...menuData.drinks,
    ];
};

// Get menu item by ID
export const getMenuItemById = (id) => {
    const allItems = getAllMenuItems();
    return allItems.find(item => item.id === id);
};

// Get items by category
export const getItemsByCategory = (category) => {
    const allItems = getAllMenuItems();
    return allItems.filter(item => item.category === category);
};

// Get featured items (first 4 pizzas for home page)
export const getFeaturedItems = () => {
    return menuData.pizzas.slice(0, 4);
};
