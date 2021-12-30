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

  public async getMenu(user: User, role: any) {
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
        if (role == 'Admin'){
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
          result.push(
          {
              "name": "attendance",
              "level": 0,
              "route": "attendance",
              "icon_Class": "local_hospital"
          })
        }
        if (role == 'Associate'){
          result.push(
          {
              "name": "search-partner",
              "level": 0,
              "route": "search-partner",
              "icon_Class": "search"
          })
        }
      }

      return {code: 201, message: result}
    } catch(e) {
      console.log(e.message)
      return {code:500, message: e.message}
    }
  }
}
  