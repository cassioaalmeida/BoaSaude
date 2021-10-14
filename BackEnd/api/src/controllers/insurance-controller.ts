import * as express from 'express';
import { Service } from 'typedi';
import { InsuranceService } from '../services/insurance-service';
import { checkJwt } from '../middlewares/checkjwt';
import { checkRole } from '../middlewares/checkRole';

@Service()
export class InsuranceController {
  private insuranceService: InsuranceService
  public path = '/insurance';
  public router = express.Router();
 
  constructor(insuranceService: InsuranceService) {
    this.insuranceService = insuranceService
    this.initializeRoutes()
  }
  
  private initializeRoutes() {
    this.router.get(this.path, [checkJwt, checkRole(["Admin"])], this.getAll);
    this.router.post(this.path, [checkJwt, checkRole(["Admin"])], this.saveInsurance);
  }

  public getAll = async (req: express.Request, res: express.Response, next: any) => {
    try {      
      const result = await this.insuranceService.getAll()

      res.status(200).send(result)
      next()
    } catch(e) {
      res.sendStatus(500) && next(e)
    }
  }

  public saveInsurance = async (req: express.Request, res: express.Response, next: any) => {
    try {
      const result = await this.insuranceService.update(req.body)

      res.status(200).send(result)
      next()
    } catch(e) {
      res.sendStatus(500) && next(e)
    }
  }
}

