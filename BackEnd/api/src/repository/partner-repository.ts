import { Partner } from "../entity/Partner"
import { Connection, Repository } from "typeorm";
import { Service } from "typedi";
import { InjectConnection, InjectRepository } from "typeorm-typedi-extensions";
import axios from 'axios'
import { PartnerType } from "../enum/PartnerType";

@Service()
export class PartnerRepository {
  @InjectRepository(Partner)
  private repository: Repository<Partner>
  /**
   *
   */
  constructor(@InjectConnection() connection: Connection) {
    this.repository = connection.getRepository(Partner)
  }

  public async getAll() {
    return this.repository.find()
  }
}
  