import { Router } from 'express';
import { handleSensorData, getPowerData } from '../controllers/sensorController.js';

const router = Router();

router.post('/', handleSensorData);
router.get('/power', getPowerData);

export default router;
