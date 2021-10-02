import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm"; 
import { Role } from "./Role";
import { sha512 } from "../utils/utils";
import moment from "moment";
import 'moment-timezone';
@Entity()
export class User {

   /**
    *
    */
   constructor(obj: any) {
      this.id = obj?.id
      this.email = obj?.email
      this.passwordHash = sha512(obj?.password)
      this.active = obj?.active
      
      const now = new Date()
      this.updatedAt = moment(now).tz('America/Sao_Paulo').toDate()

      if (!this.id) {
         this.createdAt = moment(now).tz('America/Sao_Paulo').toDate()
      }
   }
   

   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   email: string;

   @Column()
   passwordHash: string;

   @Column()
   active: boolean;

   @ManyToOne(type => Role, role => role.users) 
   role: Role;

   @Column()
   createdAt: Date;

   @Column()
   updatedAt: Date;
}