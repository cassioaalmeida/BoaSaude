import { User } from "./entity/User";

declare global {
  namespace NodeJS {
      interface Global {
          userLogged: User
      }
  }
}