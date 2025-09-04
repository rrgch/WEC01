import { saveSensorData, getRecentPowerData } from '../service/firebase.js'; 
import { calculatePower } from '../utils/powerCalculator.js';

export const handleSensorData = async (req, res) => {
  try {
    const { voltage, current, rpm } = req.body;
 console.log(req.body)
    if (typeof voltage !== 'number' || typeof current !== 'number' || typeof rpm !== 'number') {
      return res.status(400).json({ error: 'Invalid data format' });
    }

    const power = calculatePower(voltage, current);
    const data = {
      voltage,
      current,
      power,
      rpm,
      timestamp: Date.now(),
    };

    await saveSensorData(data);
    console.log(data)
    res.status(200).json({ message: 'Data saved successfully', data });
  } catch (error) {
    console.error('Error handling sensor data:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const getPowerData = async (req, res) => {
  try {
    const recentData = await getRecentPowerData();
     console.log(data)
    res.status(200).json(recentData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve power data' });
  }
};
