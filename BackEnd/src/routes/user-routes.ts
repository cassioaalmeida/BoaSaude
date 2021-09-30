
import * as userController from '../controllers/user-controller'
import { Router } from 'express';
import validateParams from './middlewares/validate-params'
const router = Router();

router.post('/', validateParams([
    {
        param_key: 'id',
        required: false,
        type: 'integer'
    },
    {
        param_key: 'email',
        required: true,
        type: 'string',
        validator_functions: [(param: any) => {return param.length <= 50}]
    },
    {
        param_key: 'password',
        required: true,
        type: 'string',
        validator_functions: [(param: any) => {return param.length <= 50}]
    },
    {
        param_key: 'role',
        required: true,
        type: 'integer'
    },
    {
        param_key: 'active',
        required: true,
        type: 'boolean'
    }]), userController.createUser)

export default router;