import express from 'express';
import router from './routes/routes.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

// Crear una instancia de la aplicación Express.
const app = express();

// Middleware para parsear JSON.
app.use(express.json());

// Importar rutas principales.
app.use(router);

// Middleware para manejar rutas no encontradas.
app.use(notFoundHandler);

// Middleware de manejo de errores generales.
app.use(errorHandler);

// Levantar el servidor.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
{
    console.log(`Servidor escuchando en puerto ${PORT}`);
});