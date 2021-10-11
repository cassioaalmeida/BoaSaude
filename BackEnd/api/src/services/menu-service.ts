import { Service } from "typedi";
import { sha512 } from "../utils/utils";

@Service()
export class MenuService {
  /**
   *
   */
  constructor() {
  }

  public async getMenu() {
    try {
      let result:any [] = []

      const isLogged = false

      if (!isLogged){
        result.push(
        {
            "name": "login",
            "level": 0,
            "route": "login",
            "icon_Class": "login"
        })
      }

      return {code: 201, message: result}
    } catch(e) {
      console.log(e.message)
      return {code:500, message: e.message}
    }
  }
}
  