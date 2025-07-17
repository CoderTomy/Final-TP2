// Servicio de vuelos: lógica de negocio y persistencia en memoria.

// Array en memoria para almacenar los vuelos.
const flights = [];

// Agregar o actualizar un vuelo.

// Agregar o actualizar un vuelo.
async function addOrUpdateFlightService({ id, xa, ya, za })
{
    const idx = flights.findIndex(f => f.id === id);

    if (idx !== -1)
    {
        flights[idx] = { id, xa, ya, za }; // Actualizar los datos del vuelo existente.
    }
    else
    {
        flights.push({ id, xa, ya, za }); // Nuevo vuelo.
    }

    return;
}

// Obtener todos los vuelos.
async function getAllFlightsService()
{
    return flights;
}

// Calcular distancia entre dos vuelos.
function calcDistance(a, b)
{
    return Math.sqrt(
        Math.pow(a.xa - b.xa, 2) +
        Math.pow(a.ya - b.ya, 2) +
        Math.pow(a.za - b.za, 2)
    );
}

// Chequear colisiones (distancia < 500m).
async function checkCollisionsService(currentId)
{
    const current = flights.find(f => f.id === currentId);

    if (!current) return [];

    return flights
        .filter(f => f.id !== currentId)
        .filter(f => calcDistance(current, f) < 500)
        .map(f => f.id);
}

export
{
    addOrUpdateFlightService,
    getAllFlightsService,
    checkCollisionsService
};