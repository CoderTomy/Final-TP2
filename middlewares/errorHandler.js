// Middleware de manejo de errores generales.

export function errorHandler(err, req, res, next)
{
    console.error(err.stack);
    res.status(500).json({ errorMsg: 'Error interno del servidor.' });
}