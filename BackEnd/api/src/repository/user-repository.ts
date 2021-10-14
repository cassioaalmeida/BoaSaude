import { User } from "../entity/User"
import { Connection, Repository } from "typeorm";
import { Service } from "typedi";
import { InjectConnection, InjectRepository } from "typeorm-typedi-extensions";
import axios from 'axios'
import { UserType } from "../enum/UserType";

@Service()
export class UserRepository {
  @InjectRepository(User)
  private repository: Repository<User>
  /**
   *
   */
  constructor(@InjectConnection() connection: Connection) {
    this.repository = connection.getRepository(User)
  }

  public async upsert(user : User) {
    return this.repository.save(user)
  }

  public async getById(id: number) {
    return this.repository.findOne(id)
  }
  public async getAll(pageSize:number, pageNumber:number) {
    const offset = (pageNumber-1) * pageSize;
    return this.repository.find({
      skip: offset,
      take: pageSize
    })
  }
  public async getAllCount() {
    return this.repository.count()
  }

  public async createUserLogin(user:User, password:string) {
    let {
      email,
      active,
      userLoginId
    } = user

    const data = {
      id: userLoginId ?? 0,
      email,
      active,
      password,
      role: {name:UserType[user.type]}
    }

    return axios({
      method: 'post',
      url: 'https://boa-saude-identity.azurewebsites.net/api/user',
      data
    });
  }

}
  