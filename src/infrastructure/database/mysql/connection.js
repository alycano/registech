const mysql = require('mysql2/promise');
const db = require('./infrastructure/database/mysql/connection');
require('dotenv').config();

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

const pool = mysql.createPool(dbConfig);

// Función para probar la conexión
async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log(' Conexión a MySQL exitosa (Pool)');
        connection.release();
    } catch (error) {
        console.error(' Error al conectar a la base de datos:', error.message);
    }
}

testConnection();

module.exports = pool;