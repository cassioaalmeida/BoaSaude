import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, ManyToMany} from "typeorm";
import { Role } from "./Role";

@Entity()
export class Claim {

   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   description: string;

   @ManyToMany(type => Role)
   roles: Role[];
}