import { UserInsurance } from "../entity/UserInsurance";
import { Service } from "typedi";
import { UserInsuranceRepository } from "../repository/user-insurance-repository";
import moment from "moment";
import 'moment-timezone';
import { InsuranceService } from "./insurance-service";
import { UserService } from "./user-service";

@Service()
export class UserInsuranceService {
  private userInsuranceRepository: UserInsuranceRepository
  private insuranceService: InsuranceService
  private userService: UserService
  /**
   *
   */
  constructor(
    userInsuranceRepository: UserInsuranceRepository,
    insuranceService: InsuranceService,
    userService: UserService) {
    this.userInsuranceRepository = userInsuranceRepository
    this.insuranceService = insuranceService
    this.userService = userService
  }

  public async getByUserId(id:number) {
    try {
      return await this.userInsuranceRepository.getByUserId(id)
    } catch(e) {
      throw e
    }
  }

  public async save(userinsurance:any) {
    try {
      const user = await this.userService.getUser(userinsurance.userId)
      const insurance = await this.insuranceService.getById(userinsurance.insuranceId)
      userinsurance.monthlyCost = await this.getCostByUserAge(user.age, userinsurance.insuranceId)
      if (userinsurance.hasDental){
        userinsurance.monthlyCost += userinsurance.monthlyCost*0.15
      }
      if(!userinsurance.id) {
        userinsurance.createdAt = moment(new Date()).tz('America/Sao_Paulo').toDate()
        userinsurance.cardNumber = (Math.floor(100000000 + Math.random() * 900000000)).toString();
      }
      userinsurance.updatedAt = moment(new Date()).tz('America/Sao_Paulo').toDate()

      let obj: UserInsurance
      obj = {
        cardNumber: userinsurance.cardNumber,
        id: userinsurance.id,
        hasDental: userinsurance.hasDental,
        montlhyCost: userinsurance.monthlyCost,
        createdAt: userinsurance.createdAt,
        updatedAt: userinsurance.updatedAt,
        user: user,
        insurance: insurance,
        status: userinsurance.status
      }

      return await this.userInsuranceRepository.save(obj)
    } catch(e) {
      throw e
    }
  }
  public async getCostByUserAge(age: number, insuranceId:number) {
    const insurance = await this.insuranceService.getById(insuranceId)
    switch (true) {
      case age < 11:
        return insurance.value1
      case age < 21:
        return insurance.value2
      case age < 31:
        return insurance.value3
      case age < 41:
        return insurance.value4
      case age < 51:
        return insurance.value5
      case age < 61:
        return insurance.value6
      case age < 71:
        return insurance.value7
      case age < 81:
        return insurance.value8
      case age < 91:
        return insurance.value9
      default:
        return insurance.value10
    }
  }
}

  