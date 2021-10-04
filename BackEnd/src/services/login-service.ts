import { UserService } from "./user-service";
import { Service } from "typedi";
import { sha512 } from "../utils/utils";
@Service()
export class LoginService {
  private userService: UserService
  /**
   *
   */
  constructor(userService: UserService) {
    this.userService = userService
  }
  
  public async login (reqLogin: any) {
    const {
      email,
      password
    } =  reqLogin
    const login = await this.userService.getByEmail(email)

    if (!login || login.passwordHash !== sha512(password)){
      return {code:401, message: 'Invalid login/password'}
    }

    return {code: 200, message: 'Authorized'}
  }
}
  