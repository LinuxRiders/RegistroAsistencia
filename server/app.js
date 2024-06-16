import express from 'express';

import cors from "cors";
import configs from './config/config.js';

import asistencia from "./routes/asistencia.routes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', asistencia);

app.listen(configs.PORT);
console.log(`Server is running on port ${configs.PORT}.`); 