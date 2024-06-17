import { Router } from 'express';
import { createUser } from '../controllers/register.controller.js';
import { authenticate } from '../utils/authenticate.js';


const router = Router();

router.post('/user', authenticate, createUser);


export default router;