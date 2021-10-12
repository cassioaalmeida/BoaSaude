import { User } from "../entity/User";
import { Service } from "typedi";
import { sha512 } from "../utils/utils";
import { UserRepository } from "../repository/user-repository";

@Service()
export class UserService {
  private userRepository: UserRepository
  /**
   *
   */
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  public async getAll(pageSize:number, pageNumber:number) {
    try {
      return await this.userRepository.getAll(pageSize, pageNumber)
    } catch(e) {
      throw e
    }
  }
  public async getAllCount() {
    try {
      return await this.userRepository.getAllCount()
    } catch(e) {
      throw e
    }
  }
}
  