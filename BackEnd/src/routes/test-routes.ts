
import * as teste from '../controllers/teste'
import { Router } from 'express';
const router = Router();

router.post('/teste', teste.testeFunc)

export default router;