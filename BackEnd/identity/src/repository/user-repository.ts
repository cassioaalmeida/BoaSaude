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
    return this.repository.save(user)
  }

  public async getById(id: number) {
    return this.repository.findOne(id)
  }

  public async getByEmail(email: string) {
    return this.repository.findOne({
      where: {
        email
      },
      relations: [
        'role'
      ]
    })
  }

}
  