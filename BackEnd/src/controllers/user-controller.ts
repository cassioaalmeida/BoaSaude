import * as express from 'express';
import { Service } from 'typedi';
import { UserService } from '../services/user-service';
import validateParams from '../middlewares/validate-params'

@Service()
export class UserController {
  private userService: UserService
  public path = '/user';
  public router = express.Router();
 
  constructor(userService: UserService) {
    this.userService = userService
    this.initializeRoutes()
  }
  
  public createUser = async (req: express.Request, res: express.Response, next: any) => {
    try {
      const result = await this.userService.create(req.body)
  
      res.status(result.code).send(result.message)
      next()
    } catch(e) {
      console.log(e.message)
      res.sendStatus(500) && next(e)
    }
  }
  
  private initializeRoutes() {
    this.router.post(this.path, validateParams([
          {
              param_key: 'id',
              required: false,
              type: 'number',
              validator_functions: [(param: any) => {return param >= 0}]
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
              param_key: 'active',
              required: true,
              type: 'boolean',
              validator_functions: [(param: any) => {return true}]
          }]), this.createUser);
  }
}

