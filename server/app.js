import express from 'express';

import cors from "cors";
import configs from './config/config.js';

import login from "./routes/login.routes.js";
import register from "./routes/register.routes.js";
import asistencia from "./routes/asistencia.routes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', asistencia);
app.use('/api/login', login);
app.use('/api/register', register);

app.listen(configs.PORT);
console.log(`Server is running on port ${configs.PORT}.`); 