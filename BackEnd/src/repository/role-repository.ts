import {getRepository} from "typeorm"; 
import { Role } from "../entity/Role";

export const getRoleByName = (role: string) => {
    return getRepository(Role).findOne({
        where: {
            description: role
        }
    })
}