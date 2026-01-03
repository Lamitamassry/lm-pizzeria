import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import authRouter from './routes/auth.js';
import ordersRouter from './routes/orders.js';

// Load environment variables at the very top
dotenv.config();

// Create Express application
const app = express();

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());

// API Routes
app.use('/api/auth', authRouter);
app.use('/api/orders', ordersRouter);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// 404 handler - must come after all routes
app.use(notFoundHandler);

// Error handler - must be last middleware
app.use(errorHandler);

// Export the app for use in index.js
export default app;
