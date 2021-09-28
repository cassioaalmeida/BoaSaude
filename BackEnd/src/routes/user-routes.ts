
import * as userController from '../controllers/user-controller'
import { Router } from 'express';
import validateParams from './middlewares/validate-params'
const router = Router();

router.post('/', validateParams([
    {
        param_key: 'abc',
        required: true,
        type: 'string',
        validator_functions: [(param: any) => {return param.length <= 10}]
    }]), userController.createUser)

export default router;