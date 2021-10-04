import { User } from "../entity/User"
import { RoleService } from "./role-service";
import { Service } from "typedi";
import { UserRepository } from "../repository/user-repository";
import { sha512 } from "../utils/utils";
@Service()
export class UserService {
  private roleService: RoleService
  private userRepository: UserRepository
  /**
   *
   */
  constructor(roleService: RoleService,
              userRepository: UserRepository) {
    this.roleService = roleService
    this.userRepository = userRepository
  }

  public async create(reqUser : any) {
    try {
      if (!!reqUser.id) {
        const userDb = await this.userRepository.getById(reqUser.id)
        if (!userDb) {
          return {code: 400, message: 'User not found!'}
        }
      }

      let user = new User(reqUser)
      user.role = await this.roleService.getByName(reqUser.role.name)
      if (!user.role) {
        return {code: 400, message: 'Role not found!'}
      }

      const result = await this.userRepository.upsert(user)


      return {code: 201, message: result}
    } catch(e) {
      console.log(e.message)
      return {code:500, message: e.message}
    }
  }
  
  public async login (reqUser: any) {
    const {
      email,
      passowrd
    } =  reqUser
    const user = await this.getByEmail(email)

    if (!user || await user.passwordHash !== sha512(passowrd)){
      return {code:401, message: 'Invalid user/password'}
    }

    return {code: 200, message: 'Authorized'}
  }
  
  public async getByEmail (email: string) {
    return this.userRepository.getByEmail(email)
  }
}
  