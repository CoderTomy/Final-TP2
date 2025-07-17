import { Router } from 'express';
import { addOrUpdateFlight, getAllFlights } from '../controllers/flightController.js';
import { validateFlight } from '../middlewares/validateFlight.js';

const router = Router();

// POST /flights - Ingresar o actualizar datos de un vuelo.
router.post('/', validateFlight, addOrUpdateFlight);

// GET /flights - Listar todos los vuelos.
router.get('/', getAllFlights);

export default router;