// Middleware para manejar rutas no encontradas.

export function notFoundHandler(req, res, next)
{
    res.status(404).json({ errorMsg: 'Ruta no encontrada.' });
}