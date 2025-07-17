// Middleware para validar los datos de un vuelo.

export async function validateFlight(req, res, next)
{
    const { id, xa, ya, za } = req.body;

    // Validar id: 3 letras + 3 números.
    const idRegex = /^[A-Z]{3}\d{3}$/i;

    if (!id || !idRegex.test(id))
    {
        return res.status(400).json({ errorMsg: 'datos no válidos' });
    }

    // Validar coordenadas numéricas.
    if (
        typeof xa !== 'number' ||
        typeof ya !== 'number' ||
        typeof za !== 'number' ||
        isNaN(xa) || isNaN(ya) || isNaN(za)
    )
    {
        return res.status(400).json({ errorMsg: 'datos no válidos' });
    }

    return next();
}