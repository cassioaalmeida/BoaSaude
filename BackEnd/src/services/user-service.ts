import { getById, upsert } from "../repository/user-repository"
import { User } from "../entity/User"
import { getRoleByName } from "../repository/role-repository"
import { Connection, Repository } from "typeorm";
import { RoleService } from "./role-service";
import { Service } from "typedi";
import { InjectConnection, InjectRepository } from "typeorm-typedi-extensions";

@Service()
export class UserService {
  @InjectRepository(User)
  private repository: Repository<User>
  private roleService: RoleService
  /**
   *
   */
  constructor(@InjectConnection() connection: Connection,
              roleService: RoleService) {
    this.repository = connection.getRepository(User)
    this.roleService = roleService
  }

  public async create(reqUser : any) {
    try {
      if (!!reqUser.id) {
        const userDb = await this.repository.findOne(reqUser.id)
        if (!userDb) {
          return {code: 400, message: 'User not found!'}
        }
      }
      let user = new User(reqUser)
      user.role = await this.roleService.findByName(reqUser.role.name)
      const result = await this.repository.save(user)


      return {code: 201, message: result}
    } catch(e) {
      console.log(e.message)
      return {code:500, message: e.message}
    }
  }

}
  