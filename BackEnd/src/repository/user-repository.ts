import { User } from "../entity/User";
import {getRepository} from "typeorm"; 

export const upsert = (user : User) => {
    return getRepository(User).save(user)
}
export const getById = (id : number) => {
    return getRepository(User).findOne(id)
}