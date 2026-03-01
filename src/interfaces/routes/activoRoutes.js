const express = require('express');
const router = express.Router();

// Aquí definimos qué se puede hacer con los activos (laptops, mouses, etc.)
router.get('/', (req, res) => {
    res.json({ message: "Lista de activos (Próximamente)" });
});

router.post('/', (req, res) => {
    res.json({ message: "Activo registrado con éxito (Simulado)" });
});

module.exports = router;