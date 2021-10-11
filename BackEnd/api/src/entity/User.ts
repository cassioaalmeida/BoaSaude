import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm"; 
import 'moment-timezone';

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
   
   @Column()
   address: string;
   
   @Column()
   city: string;
   
   @Column()
   state: string;
   
   @Column()
   age: number;

   @Column()
   longitude: string;
   
   @Column()
   latitude: string;
   
   @Column()
   userLoginId: number;

   @Column()
   active: boolean;

   @Column()
   createdAt: Date;

   @Column()
   updatedAt: Date;
}