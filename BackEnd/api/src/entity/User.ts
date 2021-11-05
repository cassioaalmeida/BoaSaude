import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne} from "typeorm"; 
import 'moment-timezone';
import { UserType } from "../enum/UserType";
import { UserInsurance } from "./UserInsurance";

@Entity()
export class User {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({
      nullable:true
   })
   name: string;
   
   @Column({
      nullable:true
   })
   phone: string;
   
   @Column({default: ''})
   document: string;
   
   @Column({
      nullable:true
   })
   email: string;

   @Column({default: ''})
   CEP: string;
   
   @Column({
      nullable:true
   })
   address: string;
   
   @Column({default: 0})
   number: number;
   
   @Column({
      nullable:true
   })
   city: string;
   
   @Column({default: ''})
   complement: string;
   
   @Column({
      nullable:true
   })
   state: string;
   
   @Column({
      nullable:true
   })
   age: number;
   
   @Column()
   type: UserType;
   
   @Column({
      nullable:true
   })
   userLoginId: number;

   @Column()
   active: boolean;

   @Column()
   createdAt: Date;

   @Column()
   updatedAt: Date;

   @OneToOne(() => UserInsurance)    
   userInsurance: UserInsurance;
}