import { initializeApp, cert } from 'firebase-admin/app';
import { getDatabase } from 'firebase-admin/database';
import serviceAccount from '../../credentials/wave-energy-eneration-firebase-adminsdk-fbsvc-ee7306594a.js'

// Initialize Firebase
initializeApp({
  credential: cert(serviceAccount),
  databaseURL: 'https://wave-energy-eneration-default-rtdb.firebaseio.com',
});

const db = getDatabase();

export const saveSensorData = async (data) => {
  const ref = db.ref('sensorData');
  await ref.push(data);
};

export const getRecentPowerData = async () => {
  const ref = db.ref('sensorData');
  const snapshot = await ref.orderByChild('timestamp').limitToLast(10).once('value');
  const data = snapshot.val();
  return Object.values(data || {});
};
