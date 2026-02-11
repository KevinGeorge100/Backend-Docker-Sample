// ==============================
// Centralized Error Handling Middleware
// ==============================

/**
 * Express error-handling middleware
 * Must have 4 parameters (err, req, res, next) for Express to recognize it
 */
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
    // Log the error to the console for debugging
    console.error('❌ Error:', err.message);
    console.error('📍 Stack:', err.stack);

    // Determine the status code
    const statusCode = err.statusCode || 500;

    // Send a clean error response
    res.status(statusCode).json({
        success: false,
        error: {
            message: err.message || 'Internal Server Error',
            // Only show stack trace in development
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
        },
    });
};

module.exports = errorHandler;
