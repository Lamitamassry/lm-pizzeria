import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import MainLayout from './layouts/MainLayout';

// Pages
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/Menu';
import MenuItemDetail from './pages/MenuItemDetail';
import OrderConfirmation from './pages/OrderConfirmation';
import Orders from './pages/Orders';
import Signup from './pages/Signup';

/**
 * Main App Component
 * Sets up all the routes for the different pages in the app
 */
function App() {
    return (
        <CartProvider>
            <Router>
                <Routes>
                    {/* Main layout wrapper with navbar and footer */}
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="menu" element={<Menu />} />
                        <Route path="menu/:id" element={<MenuItemDetail />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="order-confirmation" element={<OrderConfirmation />} />
                    </Route>
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;
