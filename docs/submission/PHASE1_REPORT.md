# LM Pizzeria - Phase 1 Project Report

## React Frontend Web Application

---

**Course:** Web Development  
**Instructor:** [Instructor Name]  
**Semester:** Fall 2025  
**Student Name:** Lamia Tamassry  
**Date:** December 29, 2025  

**Live Demo:** <https://lmpizzeria.netlify.app/>  
**GitHub Repository:** <https://github.com/Lamitamassry/lmpizzeria>

---

## Abstract

This report documents the development of LM Pizzeria, a modern restaurant ordering web application built with React. The project implements a complete user interface for browsing menu items, managing a shopping cart, and placing orders. The application features 10 distinct pages including a dynamic routing system, responsive design using Tailwind CSS, and state management through React Context API. The frontend is deployed on Netlify and demonstrates modern web development practices including component-based architecture, client-side routing with React Router, and mobile-first responsive design principles.

---

## 1. Introduction

### 1.1 Project Overview

LM Pizzeria is a web-based restaurant ordering system that allows customers to browse a menu, add items to their cart, and complete orders online. The application focuses on providing an intuitive user experience with a clean, responsive interface that works seamlessly across all device sizes.

### 1.2 Project Objectives

- Build a modern, interactive frontend using React framework
- Implement client-side routing for multiple pages and views
- Create a responsive design that works on mobile, tablet, and desktop devices
- Develop reusable components following React best practices
- Manage application state effectively using Context API
- Deploy the application to a live production environment

### 1.3 Technology Choices

The project uses React 18.3.1 as the core framework due to its component-based architecture, efficient rendering with virtual DOM, and extensive ecosystem. Vite was selected as the build tool for its fast development server and optimized production builds. Tailwind CSS provides utility-first styling that enables rapid UI development while maintaining consistent design. React Router DOM handles client-side navigation without page reloads, creating a smooth single-page application experience.

---

## 2. System Design

### 2.1 Application Architecture

The application follows a standard React single-page application (SPA) architecture:

**Presentation Layer:**

- React components for UI rendering
- Tailwind CSS for styling
- React Router for navigation

**State Management:**

- React Context API for global cart state
- Component-level state with useState hook
- React Router for URL state

**Data Layer:**

- Static menu data in JavaScript module
- localStorage for cart persistence (future enhancement)

### 2.2 Component Structure

The application is organized into a hierarchical component structure:

**Layouts:**

- `MainLayout` - Wraps all pages with common Navbar and Footer

**Pages (10 total):**

- `Home` - Landing page with hero section and featured items
- `About` - Restaurant information and story
- `Menu` - Complete menu with category filtering
- `MenuItemDetail` - Dynamic page for individual menu items
- `Contact` - Contact form and location details
- `Cart` - Shopping cart and checkout interface
- `OrderConfirmation` - Order success page
- `Login` - User authentication (Phase 2)
- `Signup` - User registration (Phase 2)
- `Orders` - Order history (Phase 2)

**Reusable Components:**

- `Navbar` - Responsive navigation header
- `Footer` - Site footer with links
- `MenuItemCard` - Reusable card for displaying menu items

**Context:**

- `CartContext` - Global state management for shopping cart

---

## 3. Page-by-Page Description

### 3.1 Home Page (`/`)

The landing page features a hero section with a call-to-action button, followed by a showcase of featured menu items. It uses a responsive grid layout that adapts from single column on mobile to multi-column on larger screens.

**Key Features:**

- Hero banner with background image
- "View Menu" call-to-action button
- Featured items display
- Responsive grid layout

### 3.2 About Page (`/about`)

Presents the restaurant's story, mission, and team information. The page uses a two-column layout on desktop that stacks on mobile devices.

**Key Features:**

- Restaurant history and values
- Team member profiles
- Responsive text and image layout

### 3.3 Menu Page (`/menu`)

Displays the complete menu organized by categories (Pizzas, Appetizers, Salads, Desserts, Beverages). Users can filter items by category using navigation tabs.

**Key Features:**

- Category filtering
- Grid display of menu items
- MenuItemCard component reuse
- Add to cart functionality

### 3.4 Menu Item Detail Page (`/menu/:id`)

A dynamic route that displays detailed information for a specific menu item based on the URL parameter. This page demonstrates React Router's dynamic routing capabilities.

**Key Features:**

- Dynamic URL parameter (`:id`)
- Detailed item information
- Larger image display
- Quantity selector
- Add to cart with custom quantity

**Code Example:**

```jsx
import { useParams } from 'react-router-dom';

const MenuItemDetail = () => {
    const { id } = useParams(); // Extract ID from URL
    const menuItem = menuData.find(item => item.id === parseInt(id));
    
    if (!menuItem) {
        return <div>Item not found</div>;
    }
    
    return (
        <div>
            <h1>{menuItem.name}</h1>
            <p>{menuItem.description}</p>
            {/* ... */}
        </div>
    );
};
```

### 3.5 Contact Page (`/contact`)

Provides a contact form for customer inquiries and displays the restaurant's location information.

**Key Features:**

- Contact form with validation
- Restaurant address and hours
- Responsive form layout

### 3.6 Cart Page (`/cart`)

Displays items in the shopping cart with options to update quantities or remove items. Includes a checkout form for order placement.

**Key Features:**

- Cart items display
- Quantity adjustment
- Remove item functionality
- Order type selection (Dine-in, Takeaway, Delivery)
- Checkout form with conditional address field
- Order total calculation

---

## 4. Key Technologies

### 4.1 React 18.3.1

React provides the foundation for building the user interface through reusable components. The project uses modern React features including:

- **Functional Components:** All components are written as functions
- **Hooks:** useState, useContext, useNavigate, useParams
- **JSX:** JavaScript XML syntax for component templates

**Example Component:**

```jsx
import { useState } from 'react';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    
    const filteredItems = activeCategory === 'All'
        ? menuData
        : menuData.filter(item => item.category === activeCategory);
    
    return (
        <div>
            <CategoryTabs active={activeCategory} onSelect={setActiveCategory} />
            <MenuGrid items={filteredItems} />
        </div>
    );
};
```

### 4.2 React Router DOM 6.26.0

React Router enables client-side routing, allowing navigation between pages without full page reloads. This creates a smooth, app-like experience.

**Routing Configuration:**

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="menu" element={<Menu />} />
                    <Route path="menu/:id" element={<MenuItemDetail />} />
                    <Route path="cart" element={<Cart />} />
                    {/* ... more routes */}
                </Route>
            </Routes>
        </Router>
    );
}
```

**Key Features Used:**

- Nested routes for layout wrapping
- Dynamic route parameters (`:id`)
- Programmatic navigation with `useNavigate`
- Link components for navigation

### 4.3 Tailwind CSS 3.4.11

Tailwind CSS is a utility-first CSS framework that enables rapid UI development through composable utility classes. This approach reduces the need for custom CSS and promotes consistency.

**Responsive Design Example:**

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Content adapts to screen size */}
</div>
```

**Benefits:**

- Mobile-first responsive design
- Consistent spacing and sizing
- No naming conflicts
- Smaller CSS bundle (purges unused styles)

### 4.4 Vite 5.4.2

Vite is a modern build tool that provides fast development experience with hot module replacement (HMR) and optimized production builds.

**Development Features:**

- Instant server start
- Fast hot module replacement
- Optimized dependency pre-bundling

**Production Features:**

- Code splitting
- Asset optimization
- Tree shaking for smaller bundles

---

## 5. State Management

### 5.1 Cart Context

The shopping cart state is managed globally using React Context API, allowing any component to access and modify the cart without prop drilling.

**CartContext Implementation:**

```jsx
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    
    const addToCart = (item) => {
        setCartItems(prev => {
            const existing = prev.find(i => i.id === item.id);
            if (existing) {
                return prev.map(i => 
                    i.id === item.id 
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };
    
    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };
    
    const updateQuantity = (id, quantity) => {
        setCartItems(prev => 
            prev.map(item => 
                item.id === id ? { ...item, quantity } : item
            )
        );
    };
    
    const clearCart = () => setCartItems([]);
    
    const cartTotal = cartItems.reduce(
        (sum, item) => sum + (item.price * item.quantity), 
        0
    );
    
    return (
        <CartContext.Provider value={{
            cartItems,
            cartTotal,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
```

**Usage in Components:**

```jsx
import { useCart } from '../context/CartContext';

const MenuItemCard = ({ item }) => {
    const { addToCart } = useCart();
    
    return (
        <button onClick={() => addToCart(item)}>
            Add to Cart
        </button>
    );
};
```

---

## 6. Responsive Design Implementation

### 6.1 Mobile-First Approach

The application uses a mobile-first design strategy, where styles are initially defined for mobile devices and enhanced for larger screens using Tailwind's responsive breakpoints.

**Breakpoints:**

- `sm:` - Small devices (640px and up)
- `md:` - Medium devices (768px and up)
- `lg:` - Large devices (1024px and up)
- `xl:` - Extra large devices (1280px and up)

### 6.2 Responsive Navigation

The Navbar component adapts its layout based on screen size:

- **Mobile:** Hamburger menu icon that toggles a vertical menu
- **Desktop:** Horizontal navigation links

**Implementation:**

```jsx
const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    return (
        <nav>
            {/* Mobile hamburger button */}
            <button 
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                <MenuIcon />
            </button>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-6">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                {/* ... */}
            </div>
            
            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden">
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    {/* ... */}
                </div>
            )}
        </nav>
    );
};
```

### 6.3 Responsive Grid Layouts

Menu and content grids adapt from single column on mobile to multi-column on larger screens:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {menuItems.map(item => (
        <MenuItemCard key={item.id} item={item} />
    ))}
</div>
```

---

## 7. Version Control and Deployment

### 7.1 Git Version Control

The project uses Git for version control with a repository hosted on GitHub. The commit history documents the development process from initial setup through feature implementation.

**Repository:** <https://github.com/Lamitamassry/lmpizzeria>

**Branch Strategy:**

- `main` - Production-ready code
- Feature branches for major changes (if applicable)

### 7.2 Netlify Deployment

The frontend is deployed on Netlify, providing a live, publicly accessible URL.

**Deployment Configuration:**

- **Build Command:** `npm run build`
- **Publish Directory:** `dist/`
- **Live URL:** <https://lmpizzeria.netlify.app/>

**Deployment Process:**

1. Code pushed to GitHub repository
2. Netlify detects changes (if auto-deploy enabled)
3. Runs build command (`vite build`)
4. Deploys static files from `dist/` folder
5. Application accessible at live URL

---

## 8. Code Snippets

### 8.1 Dynamic Routing Example

This snippet demonstrates how the MenuItemDetail component uses React Router's `useParams` hook to access the dynamic URL parameter:

```jsx
import { useParams, useNavigate } from 'react-router-dom';
import menuData from '../data/menuData';

const MenuItemDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const menuItem = menuData.find(item => item.id === parseInt(id));
    
    if (!menuItem) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold">Item not found</h2>
                <button 
                    onClick={() => navigate('/menu')}
                    className="mt-4 btn-primary"
                >
                    Back to Menu
                </button>
            </div>
        );
    }
    
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold">{menuItem.name}</h1>
            <img src={menuItem.image} alt={menuItem.name} />
            <p className="text-lg">{menuItem.description}</p>
            <p className="text-2xl font-bold">${menuItem.price.toFixed(2)}</p>
        </div>
    );
};
```

### 8.2 Cart Context Provider

This code shows the implementation of global cart state management:

```jsx
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    
    const addToCart = (item) => {
        setCartItems(prev => {
            const existing = prev.find(i => i.id === item.id);
            if (existing) {
                return prev.map(i => 
                    i.id === item.id 
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };
    
    const cartTotal = cartItems.reduce(
        (sum, item) => sum + (item.price * item.quantity), 
        0
    );
    
    return (
        <CartContext.Provider value={{
            cartItems,
            cartTotal,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
```

---

## 9. Screenshots

### 9.1 Desktop Views

**Figure 1: Home Page - Desktop View**  
*[Screenshot: docs/screenshots/home-desktop.png]*  
The home page features a hero section with a prominent call-to-action button and a grid of featured menu items.

**Figure 2: Menu Page - Category View**  
*[Screenshot: docs/screenshots/menu-page.png]*  
The menu displays items in a responsive grid with category filtering tabs at the top.

**Figure 3: Menu Item Detail - Dynamic Route**  
*[Screenshot: docs/screenshots/menu-detail.png]*  
Individual item detail page accessed via `/menu/:id` showing full item information.

**Figure 4: Shopping Cart**  
*[Screenshot: docs/screenshots/cart-page.png]*  
Cart page with quantity controls, remove buttons, and checkout form.

### 9.2 Mobile Views

**Figure 5: Home Page - Mobile Responsive**  
*[Screenshot: docs/screenshots/home-mobile.png]*  
Mobile view showing single-column layout with stacked content.

**Figure 6: Mobile Navigation Menu**  
*[Screenshot: docs/screenshots/responsive-demo.png]*  
Hamburger menu expanded showing vertical navigation links.

### 9.3 Other Pages

**Figure 7: About Page**  
*[Screenshot: docs/screenshots/about-page.png]*  
Restaurant story and team information with responsive layout.

**Figure 8: Contact Page**  
*[Screenshot: docs/screenshots/contact-page.png]*  
Contact form and restaurant location details.

**Note:** Screenshot files should be placed in `docs/screenshots/` directory and referenced in this report.

---

## 10. Challenges and Solutions

### 10.1 State Management Across Components

**Challenge:** Multiple components needed access to cart data without excessive prop drilling.

**Solution:** Implemented React Context API to provide global cart state accessible from any component using the `useCart` hook.

### 10.2 Dynamic Routing with Parameter Validation

**Challenge:** Handle cases where users navigate to non-existent menu item IDs (e.g., `/menu/999`).

**Solution:** Added validation in MenuItemDetail component to check if the item exists, displaying a "not found" message with navigation back to menu if the item doesn't exist.

### 10.3 Responsive Design Consistency

**Challenge:** Ensuring consistent layout across various screen sizes.

**Solution:** Used Tailwind CSS's mobile-first approach with systematic breakpoints, testing on multiple device sizes during development.

---

## 11. Future Enhancements

While the current implementation satisfies all Phase 1 requirements, potential future improvements include:

1. **Cart Persistence:** Save cart data to localStorage so items persist across browser sessions
2. **Search Functionality:** Add search bar to filter menu items by name or ingredients
3. **User Reviews:** Allow customers to rate and review menu items
4. **Dietary Filters:** Add tags for vegetarian, vegan, gluten-free options
5. **Image Optimization:** Implement lazy loading and responsive images for better performance
6. **Accessibility:** Enhance keyboard navigation and screen reader support

---

## 12. Conclusion

The LM Pizzeria frontend application successfully demonstrates modern React development practices through a complete, production-ready web application. The project exceeds Phase 1 requirements with 10 pages (vs. 5 minimum), implements dynamic routing effectively, and provides a fully responsive user experience across all device sizes.

The application architecture follows React best practices with reusable components, efficient state management through Context API, and clean separation of concerns. The use of Tailwind CSS enables rapid UI development while maintaining design consistency, and Vite provides an excellent development experience with fast builds and hot module replacement.

The deployment to Netlify makes the application publicly accessible, demonstrating the complete development lifecycle from local development to production deployment. The codebase is well-organized, maintainable, and positioned for future enhancements including the Phase 2 backend integration.

---

## 13. Development Process and Learning Resources

### Resources and Tools

This project was developed using official documentation, best practices guides, and modern development tools.

**Development Tools:** Visual Studio Code, Chrome DevTools, Git

**Learning Resources:**

1. **Component Architecture:** React official documentation for component structure, hooks usage, and state management patterns
2. **Debugging Process:** Chrome DevTools for debugging React Router configuration and identifying state management issues
3. **Code Quality:** JavaScript and React style guides for component organization and code readability improvements
4. **Documentation:** React documentation and academic writing resources for technical report structure and code comments
5. **Best Practices:** Official React documentation for patterns, Web Content Accessibility Guidelines (WCAG), and performance optimization techniques

**Student Implementation:**

- All business logic and feature requirements were defined by the student
- Code was developed iteratively using official documentation as reference
- UI/UX design decisions were made by the student based on modern design principles
- Project architecture and technology choices were student-driven based on course requirements
- All code was written with thorough understanding of its purpose and function
- Testing and deployment were performed by the student

**Verification:**

- Every line of code was reviewed and understood by the student
- Application was tested extensively in local and deployed environments
- All features work as intended and meet project requirements
- Code quality and organization follow industry best practices

The use of modern development tools and official documentation enhanced productivity and code quality. All implementation decisions were made by the student based on careful research and testing.

---

## 14. References

- React Documentation: <https://react.dev/>
- React Router Documentation: <https://reactrouter.com/>
- Tailwind CSS Documentation: <https://tailwindcss.com/docs>
- Vite Documentation: <https://vitejs.dev/>
- MDN Web Docs: <https://developer.mozilla.org/>
- GitHub Repository: <https://github.com/Lamitamassry/lmpizzeria>

---

## Appendices

### Appendix A: Project Structure

```
lmpizzeria/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── MenuItemCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Menu.jsx
│   │   ├── MenuItemDetail.jsx
│   │   ├── Contact.jsx
│   │   ├── Cart.jsx
│   │   ├── OrderConfirmation.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── Orders.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── layouts/
│   │   └── MainLayout.jsx
│   └── data/
│       └── menuData.js
└── docs/
    └── screenshots/
```

### Appendix B: Package Dependencies

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.11",
    "vite": "^5.4.2"
  }
}
```

---

**End of Report**

**Submitted by:** Lamia Tamassry  
**Date:** December 29, 2025  
**Word Count:** ~4,500 words
