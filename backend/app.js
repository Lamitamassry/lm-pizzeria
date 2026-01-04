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

// CORS Configuration - Must be before routes
const allowedOrigins = [
    "https://lmpizzeria.netlify.app",
    "http://localhost:5173",
];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) return callback(null, true); // allow Postman/server-to-server
        if (allowedOrigins.includes(origin)) return callback(null, true);
        return callback(new Error("CORS blocked for origin: " + origin));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// Middleware
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

// Root route
app.get("/", (req, res) => {
  res.json({
    app: "LM Pizzeria API",
    status: "running",
    health: "/api/health"
  });
});

// 404 handler - must come after all routes
app.use(notFoundHandler);

// Error handler - must be last middleware
app.use(errorHandler);

// Export the app for use in index.js
export default app;
