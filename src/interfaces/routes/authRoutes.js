const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/UsuarioController');

// Ruta: POST /api/auth/register
router.post('/register', usuarioController.registrar);

// Ruta: POST /api/auth/login
// router.post('/login', usuarioController.login); // La crearemos luego

module.exports = router;