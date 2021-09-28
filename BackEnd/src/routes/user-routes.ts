
import * as userController from '../controllers/user-controller'
import { Router } from 'express';
const router = Router();

router.post('/teste', userController.testeFunc)

export default router;