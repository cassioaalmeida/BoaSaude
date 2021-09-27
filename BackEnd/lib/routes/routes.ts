
import { Router } from 'express';
import * as teste from '../controllers/teste'

const router = Router();

router.post('/teste', teste.testeFunc)

export default router;