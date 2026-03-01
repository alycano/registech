const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const activoRoutes = require('./activoRoutes');

// Prefijos para las rutas
router.use('/auth', authRoutes);
router.use('/activos', activoRoutes);

module.exports = router;