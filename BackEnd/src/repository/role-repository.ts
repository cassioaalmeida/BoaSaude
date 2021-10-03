import { Role } from "../entity/Role"
import { Connection, Repository } from "typeorm";
import { Service } from "typedi";
import { InjectConnection, InjectRepository } from "typeorm-typedi-extensions";

@Service()
export class RoleRepository {
  @InjectRepository(Role)
  private repository: Repository<Role>
  /**
   *
   */
  constructor(@InjectConnection() connection: Connection) {
    this.repository = connection.getRepository(Role)
  }

  public async getByName(description: string) {
    return this.repository.findOne({
        where: {
            description
        }
    })
  }

}
  