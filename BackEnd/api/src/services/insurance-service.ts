import { Insurance } from "../entity/Insurance";
import { Service } from "typedi";
import { sha512 } from "../utils/utils";
import { InsuranceRepository } from "../repository/insurance-repository";

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

  public async update(insurance:Insurance) {
    try {
      return await this.insuranceRepository.update(insurance)
    } catch(e) {
      throw e
    }
  }
}
  