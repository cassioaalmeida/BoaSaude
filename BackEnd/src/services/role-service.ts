import { Role } from "../entity/Role"
import { Connection, Repository } from "typeorm";
import { Service } from "typedi";
import { InjectConnection, InjectRepository } from "typeorm-typedi-extensions";
import { RoleRepository } from "../repository/role-repository";

@Service()
export class RoleService {
  private roleRepository : RoleRepository
  /**
   *
   */
  constructor(roleRepository : RoleRepository) {
    this.roleRepository = roleRepository
  }

  public async getByName(description: string) {
    return this.roleRepository.getByName(description)
  }

}
  