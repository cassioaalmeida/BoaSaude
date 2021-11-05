import * as express from 'express';
import getUser from '../middlewares/getUser';
import { Service } from 'typedi';
import { MenuService } from '../services/menu-service';

@Service()
export class MenuController {
  private menuService: MenuService
  public path = '/menu';
  public router = express.Router();
 
  constructor(menuService: MenuService) {
    this.menuService = menuService
    this.initializeRoutes()
  }
  
  private initializeRoutes() {
    this.router.get(this.path, getUser(), this.getMenu);
  }

  public getMenu = async (req: express.Request, res: express.Response, next: any) => {
    try {
      const result = await this.menuService.getMenu(res.locals.user, res.locals.jwtPayload.role)
  
      res.status(result.code).send(result.message)
      next()
    } catch(e) {
      console.log(e.message)
      res.sendStatus(500) && next(e)
    }
  }
}

