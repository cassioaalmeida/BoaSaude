import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne} from "typeorm"; 
import 'moment-timezone';
import { UserType } from "../enum/UserType";
import { UserInsurance } from "./UserInsurance";

@Entity()
export class User {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   name: string;
   
   @Column()
   phone: string;
   
   @Column({default: ''})
   document: string;
   
   @Column()
   email: string;

   @Column({default: ''})
   CEP: string;
   
   @Column()
   address: string;
   
   @Column({default: 0})
   number: number;
   
   @Column()
   city: string;
   
   @Column({default: ''})
   complement: string;
   
   @Column()
   state: string;
   
   @Column()
   age: number;
   
   @Column()
   type: UserType;
   
   @Column()
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