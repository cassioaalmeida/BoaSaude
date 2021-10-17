import * as express from 'express';
import { Service } from 'typedi';
import { UserInsuranceService } from '../services/user-insurance-service';
import { checkJwt } from '../middlewares/checkjwt';
import { checkRole } from '../middlewares/checkRole';

@Service()
export class UserInsuranceController {
  private userInsuranceService: UserInsuranceService
  public path = '/userinsurance';
  public router = express.Router();
 
  constructor(userInsuranceService: UserInsuranceService) {
    this.userInsuranceService = userInsuranceService
    this.initializeRoutes()
  }
  
  private initializeRoutes() {
    this.router.get(this.path, [checkJwt], this.getAll);
    this.router.post(this.path, [checkJwt, checkRole(["Admin"])], this.saveUserInsurance);
  }

  public getAll = async (req: express.Request, res: express.Response, next: any) => {
    try {      
      const result = await this.userInsuranceService.getByUserId(Number(req.query.userid))

      res.status(200).send(result)
      next()
    } catch(e) {
      res.sendStatus(500) && next(e)
    }
  }

  public saveUserInsurance = async (req: express.Request, res: express.Response, next: any) => {
    try {
      const result = await this.userInsuranceService.save(req.body)

      res.status(200).send(result)
      next()
    } catch(e) {
      res.sendStatus(500) && next(e)
    }
  }
}

