import { User } from "../entity/User";
import { Service } from "typedi";
import { sha512 } from "../utils/utils";

@Service()
export class MenuService {
  /**
   *
   */
  constructor() {
  }

  public async getMenu(user: User) {
    try {
      let result:any [] = []

      const isLogged = !!user

      if (!isLogged){
        result.push(
        {
            "name": "login",
            "level": 0,
            "route": "login",
            "icon_Class": "login"
        })
      } else{
        result.push(
        {
            "name": "users",
            "level": 0,
            "route": "user-list",
            "icon_Class": "people"
        })
        result.push(
        {
            "name": "insurance",
            "level": 0,
            "route": "insurance",
            "icon_Class": "paid"
        })
        result.push(
        {
            "name": "user-insurance",
            "level": 0,
            "route": "user-insurance",
            "icon_Class": "assignment_ind"
        })
      }

      return {code: 201, message: result}
    } catch(e) {
      console.log(e.message)
      return {code:500, message: e.message}
    }
  }
}
  