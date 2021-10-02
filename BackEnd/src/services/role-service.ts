import { Role } from "../entity/Role"
import { getRoleByName } from "../repository/role-repository"
import { Connection, Repository } from "typeorm";
import { Service } from "typedi";
import { InjectConnection, InjectRepository } from "typeorm-typedi-extensions";

@Service()
export class RoleService {
  @InjectRepository(Role)
  private repository: Repository<Role>
  /**
   *
   */
  constructor(@InjectConnection() connection: Connection) {
    this.repository = connection.getRepository(Role)
  }

  public async findByName(description: string) {
    return this.repository.findOne( {
      where: {
        description
      }
    })
  }

}
  