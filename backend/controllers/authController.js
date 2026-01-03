import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../db/connection.js';

const SALT_ROUNDS = 10;
const JWT_EXPIRES_IN = '7d'; // Token valid for 7 days

/**
 * Register a new user
 * POST /api/auth/signup
 */
export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validation
        if (!name || !email || !password) {
            return res.status(400).json({
                message: 'All fields are required',
                details: 'Please provide name, email, and password'
            });
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: 'Invalid email format'
            });
        }

        // Password strength validation
        if (password.length < 6) {
            return res.status(400).json({
                message: 'Password must be at least 6 characters long'
            });
        }

        // Check if user already exists
        const [existingUsers] = await db.query(
            'SELECT id FROM users WHERE email = ?',
            [email]
        );

        if (existingUsers.length > 0) {
            return res.status(409).json({
                message: 'Email already registered',
                details: 'Please use a different email or login instead'
            });
        }

        // Hash password
        const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

        // Insert new user
        const [result] = await db.query(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, passwordHash]
        );

        const userId = result.insertId;

        // Generate JWT token
        const token = jwt.sign(
            { userId, email },
            process.env.JWT_SECRET,
            { expiresIn: JWT_EXPIRES_IN }
        );

        return res.status(201).json({
            message: 'User registered successfully',
            token,
            user: {
                id: userId,
                name,
                email
            }
        });

    } catch (error) {
        console.error('Signup error:', error);
        console.error('Error details:', {
            message: error.message,
            code: error.code,
            sqlMessage: error.sqlMessage
        });
        return res.status(500).json({
            message: 'Error creating user account',
            details: process.env.NODE_ENV === 'development' ? error.message : 'Please try again later'
        });
    }
};

/**
 * Login existing user
 * POST /api/auth/login
 */
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({
                message: 'Email and password are required'
            });
        }

        // Find user by email
        const [users] = await db.query(
            'SELECT id, name, email, password FROM users WHERE email = ?',
            [email]
        );

        if (users.length === 0) {
            return res.status(401).json({
                message: 'Invalid email or password'
            });
        }

        const user = users[0];

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                message: 'Invalid email or password'
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: JWT_EXPIRES_IN }
        );

        return res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        console.error('Error details:', {
            message: error.message,
            code: error.code,
            sqlMessage: error.sqlMessage
        });
        return res.status(500).json({
            message: 'Error logging in',
            details: process.env.NODE_ENV === 'development' ? error.message : 'Please try again later'
        });
    }
};

/**
 * Get current user profile
 * GET /api/auth/me
 */
export const getProfile = async (req, res) => {
    try {
        const userId = req.user.id;

        const [users] = await db.query(
            'SELECT id, name, email, created_at FROM users WHERE id = ?',
            [userId]
        );

        if (users.length === 0) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        return res.status(200).json({
            user: users[0]
        });

    } catch (error) {
        console.error('Get profile error:', error);
        return res.status(500).json({
            message: 'Error fetching user profile'
        });
    }
};
