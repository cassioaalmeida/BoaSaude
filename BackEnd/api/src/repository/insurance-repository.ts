import { Insurance } from "../entity/Insurance"
import { Connection, Repository } from "typeorm";
import { Service } from "typedi";
import { InjectConnection, InjectRepository } from "typeorm-typedi-extensions";
import axios from 'axios'
import { InsuranceType } from "../enum/InsuranceType";

@Service()
export class InsuranceRepository {
  @InjectRepository(Insurance)
  private repository: Repository<Insurance>
  /**
   *
   */
  constructor(@InjectConnection() connection: Connection) {
    this.repository = connection.getRepository(Insurance)
  }

  public async update(insurance : Insurance) {
    return this.repository.save(insurance)
  }
  public async getAll() {
    return this.repository.find()
  }
  public async getById(id:number) {
    return this.repository.findOne({
      id
    })
  }
}
  