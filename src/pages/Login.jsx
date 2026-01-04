import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// API URL must be set via VITE_API_URL environment variable
const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
    console.error('VITE_API_URL environment variable is not set');
}

/**
 * Login Page
 * Allows users to authenticate and access protected features
 */
function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError(''); // Clear error when user types
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await fetch(`${API_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            console.log('LOGIN RESPONSE:', data);

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            // Extract token (check multiple possible field names)
            const token = data.token ?? data.accessToken ?? data.jwt;
            
            if (!token) {
                throw new Error('No token in login response');
            }

            // Store token and user info
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(data.user ?? {}));
            
            console.log('Token stored:', token);
            console.log('User stored:', data.user);

            // Redirect to menu or previous page
            navigate('/menu');
            
            // Force page reload to update navbar state
            window.location.reload();

        } catch (err) {
            console.error('Login error:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
            <div className="max-w-md mx-auto">
                <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-rose-900/30">
                    <h1 className="text-3xl font-bold text-rose-400 mb-2 text-center">
                        Welcome Back
                    </h1>
                    <p className="text-gray-400 text-center mb-8">
                        Login to your LM Pizzeria account
                    </p>

                    {error && (
                        <div className="bg-red-900/30 border border-red-500 text-red-200 px-4 py-3 rounded mb-6">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-300 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-gray-700 text-white rounded border border-gray-600 focus:border-rose-500 focus:outline-none"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-300 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-gray-700 text-white rounded border border-gray-600 focus:border-rose-500 focus:outline-none"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 rounded transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-400">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-rose-400 hover:text-rose-300">
                                Sign up here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
