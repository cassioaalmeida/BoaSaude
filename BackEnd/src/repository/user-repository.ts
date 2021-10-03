import { User } from "../entity/User"
import { Connection, Repository } from "typeorm";
import { Service } from "typedi";
import { InjectConnection, InjectRepository } from "typeorm-typedi-extensions";

@Service()
export class UserRepository {
  @InjectRepository(User)
  private repository: Repository<User>
  /**
   *
   */
  constructor(@InjectConnection() connection: Connection) {
    this.repository = connection.getRepository(User)
  }

  public async upsert(user : User) {
    try {
      const result = await this.repository.save(user)


      return {code: 201, message: result}
    } catch(e) {
      console.log(e.message)
      return {code:500, message: e.message}
    }
  }

  public async getById(id: number) {
    return this.repository.findOne(id)
  }

}
  