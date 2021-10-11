import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm"; 
import 'moment-timezone';
import { PartnerType } from "../enum/PartnerType";

@Entity()
export class Partner {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   name: string;
   
   @Column()
   phone: string;
   
   @Column()
   email: string;
   
   @Column()
   address: string;
   
   @Column()
   city: string;
   
   @Column()
   state: string;

   @Column()
   longitude: string;

   @Column()
   latidute: string;
   
   @Column()
   type: PartnerType;

   @Column()
   active: boolean;

   @Column()
   createdAt: Date;

   @Column()
   updatedAt: Date;
}