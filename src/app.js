// ==============================
// Express Application Setup
// ==============================

const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const apiRoutes = require('./routes/api.routes');
const errorHandler = require('./middlewares/error.middleware');

// Initialize Express app
const app = express();

// ==============================
// Middleware Configuration
// ==============================

// Enable CORS for all origins (configure in production)
app.use(cors());

// HTTP request logging (dev format for readable colored output)
app.use(morgan('dev'));

// Parse incoming JSON request bodies
app.use(express.json());

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files (landing page) from the public/ directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// ==============================
// Routes
// ==============================

app.use('/', apiRoutes);

// ==============================
// Error Handling
// ==============================

// Centralized error handling middleware (must be last)
app.use(errorHandler);

module.exports = app;
