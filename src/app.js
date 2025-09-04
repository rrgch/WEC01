// File: server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sensorRoutes from './routes/sensorRoutes.js'

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/sensor', sensorRoutes);
// app.use('/',(req, res) => {

// res.send("testing1")
// })

// Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
