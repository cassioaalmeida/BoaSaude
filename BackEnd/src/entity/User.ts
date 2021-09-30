import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm"; 
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

   @ManyToOne(type => Role, role => role.users) 
   role: Role;

   @Column()
   createdAt: Date;

   @Column()
   updatedAt: Date;
}