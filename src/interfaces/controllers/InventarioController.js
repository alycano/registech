const InventarioRepository = { registrarCambio, obtenerTodo } = require('../../infrastructure/repositories/InventarioRepository');

const InventarioController = {
    // Función para registrar entradas o bajas
    registrarMovimiento: async (req, res) => {
        try {
            const { id_item, id_usuario, tipo, cantidad, descripcion } = req.body;

            // 1. Validación de seguridad
            if (!id_item || !id_usuario || !tipo || !cantidad) {
                return res.status(400).json({ message: "Faltan datos para el registro riguroso" });
            }

            // 2. Llamamos al repositorio que hace la transacción en XAMPP
            await registrarCambio(id_item, id_usuario, tipo, cantidad, descripcion);

            return res.status(201).json({
                status: "success",
                message: `Movimiento de ${tipo} registrado correctamente en el historial.`
            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error al actualizar el inventario", error: error.message });
        }
    },

    // Función para ver qué hay en stock
    listarInventario: async (req, res) => {
        try {
            const items = await obtenerTodo();
            res.status(200).json(items);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener datos de XAMPP" });
        }
    }
};

module.exports = InventarioController;