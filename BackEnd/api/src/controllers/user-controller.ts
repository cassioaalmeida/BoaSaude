import * as express from 'express';
import getUser from '../middlewares/getUser';
import { Service } from 'typedi';
import { UserService } from '../services/user-service';
import { checkJwt } from '../middlewares/checkjwt';
import { checkRole } from '../middlewares/checkRole';

@Service()
export class UserController {
  private userService: UserService
  public path = '/user';
  public router = express.Router();
 
  constructor(userService: UserService) {
    this.userService = userService
    this.initializeRoutes()
  }
  
  private initializeRoutes() {
    this.router.get(this.path, [checkJwt, checkRole(["Admin"])], this.getAll);
    this.router.get(this.path + '/:id', [checkJwt, checkRole(["Admin"])], this.getUser);
    this.router.post(this.path, [checkJwt, checkRole(["Admin"])], this.saveUser);
  }

  public getAll = async (req: express.Request, res: express.Response, next: any) => {
    try {
      let {
        pageSize,
        pageNumber
      } = req.query
      
      const result = await this.userService.getAll(Number(pageSize),
                                                  Number(pageNumber))
      const totalCount = await this.userService.getAllCount()
      
      res.header('X-Pagination', JSON.stringify({
        TotalCount: totalCount,
        PageSize: Number(pageSize),
        CurrentPage: Number(pageNumber),
        TotalPages: Math.ceil(totalCount / Number(pageSize))
      }));

      res.status(200).send(result)
      next()
    } catch(e) {
      res.sendStatus(500) && next(e)
    }
  }

  public getUser = async (req: express.Request, res: express.Response, next: any) => {
    try {
      const result = await this.userService.getUser(Number(req.params.id))

      res.status(200).send(result)
      next()
    } catch(e) {
      res.sendStatus(500) && next(e)
    }
  }

  public saveUser = async (req: express.Request, res: express.Response, next: any) => {
    try {
      const result = await this.userService.upsert(req.body)

      res.status(200).send(result)
      next()
    } catch(e) {
      res.sendStatus(500) && next(e)
    }
  }
}

