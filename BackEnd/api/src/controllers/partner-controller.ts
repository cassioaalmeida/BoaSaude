import * as express from 'express';
import { Service } from 'typedi';
import { PartnerService } from '../services/partner-service';
import { checkJwt } from '../middlewares/checkjwt';
import { checkRole } from '../middlewares/checkRole';

@Service()
export class PartnerController {
  private partnerService: PartnerService
  public path = '/partner';
  public router = express.Router();
 
  constructor(partnerService: PartnerService) {
    this.partnerService = partnerService
    this.initializeRoutes()
  }
  
  private initializeRoutes() {
    this.router.get(`${this.path}/search`, [checkJwt, checkRole(["Admin", "Associate"])], this.getAll);
    this.router.get(`${this.path}`, [checkJwt, checkRole(["Admin"])], this.getAllSelect);
  }

  public getAll = async (req: express.Request, res: express.Response, next: any) => {
    try {      
      const result = await this.partnerService.getAll(Number(req.query.lat), Number(req.query.lng))

      res.status(200).send(result)
      next()
    } catch(e) {
      res.sendStatus(500) && next(e)
    }
  }
  public getAllSelect = async (req: express.Request, res: express.Response, next: any) => {
    try {      
      const result = await this.partnerService.getAllSelect()

      res.status(200).send(result)
      next()
    } catch(e) {
      res.sendStatus(500) && next(e)
    }
  }
}

