const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Inicializamos Express
const app = express();

// Middlewares globales
app.use(cors()); // Permite que el frontend se conecte
app.use(express.json()); // Permite recibir datos en formato JSON

// Ruta de prueba inicial
app.get('/', (req, res) => {
    res.json({ 
        message: "Bienvenido a la API de RegisTech",
        version: "1.0.0",
        status: "Online"
    });
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(` Servidor RegisTech corriendo en http://localhost:${PORT}`);
    console.log('Presiona Ctrl + C para detenerlo');
});