import { Router } from 'express';
import { createUser } from '../controllers/register.controller.js';


const router = Router();

router.post('/user', createUser);

router.get('/', (req, res) => {
    res.send("Chido Perrito");
});



export default router;