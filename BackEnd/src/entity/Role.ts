import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, ManyToMany} from "typeorm"; 
import { Claim } from "./Claim";
import { User } from "./User";

@Entity()
export class Role {

   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   description: string;

   @ManyToOne(type => User, user => user.roles) user: User;

   @ManyToMany(type => Claim) @JoinTable()
   claims: Claim[];
}