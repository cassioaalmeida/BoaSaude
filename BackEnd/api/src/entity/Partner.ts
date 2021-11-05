import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm"; 
import 'moment-timezone';
import { PartnerType } from "../enum/PartnerType";

@Entity()
export class Partner {
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
   
   @Column({
      nullable:true
   })
   email: string;
   
   @Column({
      nullable:true
   })
   address: string;
   
   @Column({
      nullable:true
   })
   city: string;
   
   @Column({
      nullable:true
   })
   state: string;

   @Column({
      nullable:true
   })
   longitude: string;

   @Column({
      nullable:true
   })
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