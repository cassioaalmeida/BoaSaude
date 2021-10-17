import { Insurance } from "../entity/Insurance";
import { Service } from "typedi";
import { InsuranceRepository } from "../repository/insurance-repository";
import moment from "moment";
import 'moment-timezone';

@Service()
export class InsuranceService {
  private insuranceRepository: InsuranceRepository
  /**
   *
   */
  constructor(insuranceRepository: InsuranceRepository) {
    this.insuranceRepository = insuranceRepository
  }

  public async getAll() {
    try {
      return await this.insuranceRepository.getAll()
    } catch(e) {
      throw e
    }
  }

  public async getById(id: number) {
    try {
      return await this.insuranceRepository.getById(id)
    } catch(e) {
      throw e
    }
  }

  public async update(insurance:Insurance) {
    try {
      insurance.updatedAt = moment(new Date()).tz('America/Sao_Paulo').toDate()
      return await this.insuranceRepository.update(insurance)
    } catch(e) {
      throw e
    }
  }
}
  