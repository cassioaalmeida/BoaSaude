import * as express from 'express';
import { Service } from 'typedi';
import { UserService } from '../services/user-service';

@Service()
export class UserController {
  private userService: UserService
  public path = '/user';
  public router = express.Router();
 
  constructor(userService: UserService) {
    this.userService = userService
    this.router.post(this.path, this.createUser);
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
}
