import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"; 
import { Role } from "./Role";

@Entity()
export class User {

   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   email: string;

   @Column()
   passwordHash: string;

   @Column()
   active: boolean;

   @OneToMany(type => Role, role => role.user) roles: Role[];
}