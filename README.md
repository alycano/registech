Documentación Técnica - RegisTech Backend
Este directorio contiene el código fuente de la API para el sistema de gestión de inventarios. Se ha estructurado bajo los principios de Arquitectura Limpia (Clean Architecture) para garantizar una separación clara de responsabilidades, facilitando el mantenimiento y la escalabilidad del proyecto ADSO.

Estructura del Proyecto
El código se organiza en las siguientes capas jerárquicas:

src/domain: Contiene las entidades del negocio (Usuario, Item, Movimiento) y las definiciones de interfaces.

src/application: Implementa la lógica de negocio y servicios especializados como AuthService e InventarioService.

src/infrastructure: Contiene las implementaciones técnicas, incluyendo la conexión a MySQL (XAMPP) y los repositorios de datos.

src/interfaces: Define los controladores de rutas, los endpoints de la API y los middlewares de validación.

Requisitos Previos
Para ejecutar y colaborar en este proyecto es necesario contar con:

Node.js: Versión LTS instalada.

MySQL Server: Gestionado preferiblemente a través de XAMPP para entorno de desarrollo local.

Instrucciones de Instalación
Clonar el repositorio y acceder a la carpeta del backend.

Ejecutar el comando de instalación de dependencias: npm install

Configurar el archivo .env en la raíz de la carpeta con los siguientes campos obligatorios: PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, JWT_SECRET.

Importar el script SQL de la base de datos en phpMyAdmin para habilitar las tablas de usuarios e inventario.

Para iniciar el servidor en modo desarrollo: npm run dev

Avances Actuales
Configuración del Servidor: Inicialización con Express y manejo de variables de entorno mediante dotenv.

Capa de Datos: Implementación de pool de conexiones para MySQL y repositorios con soporte para transacciones SQL, garantizando la integridad en registros de stock.

Seguridad: Integración de AuthService con encriptación de contraseñas mediante Bcrypt y autenticación basada en JWT (JSON Web Tokens).

Gestión de Inventario: Implementación de controladores para el registro riguroso de movimientos (Entradas, Bajas y Reemplazos) con historial de auditoría automático.

Enrutamiento Modular: Organización de endpoints bajo prefijos /api/auth y /api/inventario.