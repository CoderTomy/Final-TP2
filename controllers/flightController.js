// Controlador de vuelos: lógica para manejar requests/responses.

import
{
    addOrUpdateFlightService,
    getAllFlightsService,
    checkCollisionsService
} from '../services/flightService.js';


// Agregar o actualizar vuelo.
const addOrUpdateFlight = async (req, res, next) =>
{
    try
    {
        const { id, xa, ya, za } = req.body;
        await addOrUpdateFlightService({ id, xa, ya, za });

        // Chequear colisiones solo si hay más de un vuelo.
        const allFlights = await getAllFlightsService();
        let collisions = [];

        if (allFlights.length > 1)
        {
            collisions = await checkCollisionsService(id);
        }

        // Simular notificación por terminal si hay colisión
        if (collisions.length > 0)
        {
            console.log(`¡Alerta de colisión! Vuelos comprometidos: ${[id, ...collisions].join(', ')}`);
        }

        return res.status(200).json({
            id,
            xa,
            ya,
            za,
            colisiones: collisions
        });
    }
    catch (err)
    {
        next(err);
    }
};

// Listar todos los vuelos.
const getAllFlights = async (req, res, next) =>
{
    try
    {
        const flights = await getAllFlightsService();
        res.status(200).json(flights);
    }
    catch (err)
    {
        next(err);
    }
};

// Exportar funciones del controlador.
export
{
    addOrUpdateFlight,
    getAllFlights
};