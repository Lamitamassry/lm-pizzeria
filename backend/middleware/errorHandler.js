/**
 * Error handling middleware
 * Catches all errors and returns consistent JSON responses
 */
export const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);

    // Default error response
    const status = err.status || err.statusCode || 500;
    const message = err.message || 'Internal server error';
    
    // Don't expose internal error details in production
    const response = {
        message,
    };

    // Add stack trace in development mode
    if (process.env.NODE_ENV === 'development') {
        response.stack = err.stack;
    }

    // Add additional details if provided
    if (err.details) {
        response.details = err.details;
    }

    res.status(status).json(response);
};

/**
 * 404 Not Found handler
 */
export const notFoundHandler = (req, res) => {
    res.status(404).json({
        message: 'Route not found',
        path: req.originalUrl
    });
};
