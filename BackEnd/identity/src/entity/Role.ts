import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"; 
import { User } from "./User";

@Entity()
export class Role {

   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   description: string;

   @OneToMany(type => User, user => user.role)
   users: User [];
}