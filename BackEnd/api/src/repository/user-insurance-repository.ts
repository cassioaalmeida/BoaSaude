import { UserInsurance } from "../entity/UserInsurance"
import { Connection, Repository } from "typeorm";
import { Service } from "typedi";
import { InjectConnection, InjectRepository } from "typeorm-typedi-extensions";
import axios from 'axios'

@Service()
export class UserInsuranceRepository {
  @InjectRepository(UserInsurance)
  private repository: Repository<UserInsurance>
  /**
   *
   */
  constructor(@InjectConnection() connection: Connection) {
    this.repository = connection.getRepository(UserInsurance)
  }

  public async save(userInsurance : UserInsurance) {
    return this.repository.save(userInsurance)
  }
  public async getByUserId(id: number) {
    return this.repository.find({
      where:{
        user:{
          id
        }
      },
      relations: ["insurance"]
    })
  }
}
  