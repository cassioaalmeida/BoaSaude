import * as express from 'express';
import { Service } from 'typedi';
import validateParams from '../middlewares/validate-params'
import { LoginService } from '../services/login-service';

@Service()
export class LoginController {
  private loginService: LoginService
  public path = '/login';
  public router = express.Router();
 
  constructor(loginService: LoginService) {
    this.loginService = loginService
    this.initializeRoutes()
  }
  
  public login = async (req: express.Request, res: express.Response, next: any) => {
    try {
      const result = await this.loginService.login(req.body)
  
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
          param_key: 'email',
          required: true,
          type: 'string',
          validator_functions: [() => {return true}]
      },
      {
          param_key: 'password',
          required: true,
          type: 'string',
          validator_functions: [() => {return true}]
      }]), this.login)
  }
}

