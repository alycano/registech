Documentacion tecnica - RegisTech Backend
Este directorio contiene el codigo fuente de la API para el sistema de inventarios. Se ha estructurado bajo los principios de arquitectura limpia para facilitar el mantenimiento y la escalabilidad del proyecto.

Estructura del proyecto
El codigo se divide en las siguientes capas:

src/domain: Contiene las entidades y las interfaces de los repositorios.

src/application: Contiene la logica de negocio y los casos de uso.

src/infrastructure: Implementaciones de la base de datos (MySQL) y servicios externos.

src/interfaces: Controladores de rutas, definiciones de endpoints y middlewares.

Requisitos previos
Para ejecutar este proyecto es necesario tener instalado:

Node.js (Version LTS)

MySQL Server

Instrucciones de instalacion
Clonar el repositorio y entrar a la carpeta backend.

Ejecutar el comando de instalacion de dependencias:
npm install

Configurar el archivo .env en la raiz de la carpeta backend con los siguientes campos:
PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, JWT_SECRET.

Para iniciar el servidor en modo desarrollo:
npm run dev

Avances actuales
Configuracion del servidor con Express.

Implementacion de pool de conexiones para MySQL.

Estructura de directorios inicializada.

Manejo de variables de entorno con dotenv.