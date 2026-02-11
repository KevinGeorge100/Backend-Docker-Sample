// ==============================
// API Controller
// ==============================

/**
 * GET /
 * Root route — confirms the backend is running
 */
const getRoot = (req, res) => {
    res.status(200).json({
        message: 'Antigravity Backend Running 🚀',
    });
};

/**
 * GET /health
 * Health check endpoint — used by load balancers, Docker, and monitoring tools
 */
const getHealth = (req, res) => {
    res.status(200).json({
        status: 'UP',
        uptime: process.uptime(),
        timestamp: new Date(),
    });
};

/**
 * GET /api/antigravity
 * Sample API endpoint — returns mock data
 */
const getAntigravity = (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            id: 1,
            name: 'Antigravity Module',
            version: '1.0.0',
            description: 'A sample resource from the Antigravity Backend API',
            features: [
                'Health monitoring',
                'Centralized error handling',
                'Environment-based configuration',
                'Docker-ready architecture',
            ],
        },
    });
};

module.exports = {
    getRoot,
    getHealth,
    getAntigravity,
};
