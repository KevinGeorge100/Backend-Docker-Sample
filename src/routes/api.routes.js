// ==============================
// API Routes
// ==============================

const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api.controller');

// Root route
router.get('/', apiController.getRoot);

// Health check endpoint (critical for DevOps monitoring)
router.get('/health', apiController.getHealth);

// Sample API endpoint
router.get('/api/antigravity', apiController.getAntigravity);

module.exports = router;
