import { Router } from 'express';
import flightRoutes from './flightRoutes.js';

const router = Router();

// Montar las rutas de vuelos bajo /flights
router.use('/flights', flightRoutes);

export default router;