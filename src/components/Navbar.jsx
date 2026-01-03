import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cartItemCount } = useCart();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check if user is logged in
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        navigate('/');
    };

    return (
        <nav className="bg-charcoal-dark/95 backdrop-blur-md border-b border-accent-rose/20 sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <h1 className="text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-accent-rose via-accent-pink to-accent-gold bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                            LM Pizzeria
                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/menu">Menu</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        
                        {user ? (
                            <>
                                <NavLink to="/orders">My Orders</NavLink>
                                <div className="flex items-center gap-4">
                                    <span className="text-gray-400 text-sm">
                                        Hi, {user.name}
                                    </span>
                                    <button
                                        onClick={handleLogout}
                                        className="text-gray-300 hover:text-accent-rose font-medium transition-colors duration-300"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </>
                        ) : (
                            <NavLink to="/login">Login</NavLink>
                        )}

                        <Link
                            to="/cart"
                            className="relative px-4 py-2 bg-accent-rose/10 hover:bg-accent-rose/20 text-accent-rose font-semibold rounded-lg transition-all duration-300 border border-accent-rose/30 hover:border-accent-rose flex items-center gap-2"
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
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            Cart
                            {cartItemCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-accent-rose text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-lg">
                                    {cartItemCount}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden text-gray-300 hover:text-accent-rose transition-colors duration-300"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
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
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
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
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-accent-rose/20">
                        <div className="flex flex-col space-y-4">
                            <MobileNavLink to="/" onClick={toggleMobileMenu}>
                                Home
                            </MobileNavLink>
                            <MobileNavLink to="/about" onClick={toggleMobileMenu}>
                                About
                            </MobileNavLink>
                            <MobileNavLink to="/menu" onClick={toggleMobileMenu}>
                                Menu
                            </MobileNavLink>
                            <MobileNavLink to="/contact" onClick={toggleMobileMenu}>
                                Contact
                            </MobileNavLink>
                            
                            {user ? (
                                <>
                                    <MobileNavLink to="/orders" onClick={toggleMobileMenu}>
                                        My Orders
                                    </MobileNavLink>
                                    <div className="px-4 py-2 text-gray-400 text-sm">
                                        Hi, {user.name}
                                    </div>
                                    <button
                                        onClick={() => {
                                            toggleMobileMenu();
                                            handleLogout();
                                        }}
                                        className="text-gray-300 hover:text-accent-rose hover:bg-charcoal px-4 py-2 rounded-lg font-medium transition-all duration-300 text-left"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <MobileNavLink to="/login" onClick={toggleMobileMenu}>
                                        Login
                                    </MobileNavLink>
                                    <MobileNavLink to="/signup" onClick={toggleMobileMenu}>
                                        Sign Up
                                    </MobileNavLink>
                                </>
                            )}

                            <Link
                                to="/cart"
                                onClick={toggleMobileMenu}
                                className="relative px-4 py-3 bg-accent-rose/10 hover:bg-accent-rose/20 text-accent-rose font-semibold rounded-lg transition-all duration-300 border border-accent-rose/30 hover:border-accent-rose flex items-center justify-center gap-2"
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
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                Cart ({cartItemCount})
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

// Desktop navigation link component
const NavLink = ({ to, children }) => (
    <Link
        to={to}
        className="text-gray-300 hover:text-accent-rose font-medium transition-colors duration-300 relative group"
    >
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-rose to-accent-pink group-hover:w-full transition-all duration-300"></span>
    </Link>
);

// Mobile navigation link component
const MobileNavLink = ({ to, onClick, children }) => (
    <Link
        to={to}
        onClick={onClick}
        className="text-gray-300 hover:text-accent-rose hover:bg-charcoal px-4 py-2 rounded-lg font-medium transition-all duration-300"
    >
        {children}
    </Link>
);

export default Navbar;
