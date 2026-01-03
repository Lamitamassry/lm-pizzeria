import { createContext, useContext, useEffect, useState } from 'react';

/**
 * Shopping Cart Context
 * Manages cart items globally and persists them to localStorage
 */
const CartContext = createContext();

// Hook to access cart from any component
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

// Cart Provider - wraps the app to provide cart state
export const CartProvider = ({ children }) => {
    // Load saved cart items from localStorage when the app starts
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('lmPizzeriaCart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save cart to localStorage every time it changes
    useEffect(() => {
        localStorage.setItem('lmPizzeriaCart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Add item to cart (or increase quantity if already there)
    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                // Item already in cart - just increment quantity
                return prevItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                // New item - add it with quantity 1
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    // Remove an item completely from the cart
    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    // Update the quantity of a specific item
    const updateQuantity = (id, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(id);
            return;
        }

        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    // Empty the cart and clear localStorage
    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('lmPizzeriaCart');
    };

    // Calculate total number of items (counts each quantity)
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    // Calculate total price of all items
    const cartTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    // Context value to be provided
    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartItemCount,
        cartTotal,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
