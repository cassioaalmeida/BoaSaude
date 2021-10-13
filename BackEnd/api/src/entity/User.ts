import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm"; 
import 'moment-timezone';
import { UserType } from "../enum/UserType";

@Entity()
export class User {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   name: string;
   
   @Column()
   phone: string;
   
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
}