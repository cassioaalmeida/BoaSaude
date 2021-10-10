import { UserService } from "./user-service";
import { Service } from "typedi";
import { sha512 } from "../utils/utils";
import jwt from 'jsonwebtoken'
import moment from "moment";
import 'moment-timezone';
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
    const now = new Date()
    const created = moment(now).tz('America/Sao_Paulo').format('YYYY-MM-DDTHH:mm:ss');
    const expires = moment(now).add(moment.duration(1, 'hours')).tz('America/Sao_Paulo').format('YYYY-MM-DDTHH:mm:ss');
    const token = await jwt.sign(
        { 
            id: login.id, 
            email: login.email,
            issuer: "boasaude",
            audience: "boasaude",
            role: login.role.description,
            enable: login.active
        },
        'TODO_SECRET',
        {
            expiresIn: "1h",
        }
    );
    return {
        code:200,
        result: {
            authenticated: true,
            created: created,
            expiration: expires,
            access_token: token,
            token_type: "Bearer",
            message: "Ok"
        }
    }
  }
}
  