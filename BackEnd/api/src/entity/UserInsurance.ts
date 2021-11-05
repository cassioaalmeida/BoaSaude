import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne} from "typeorm"; 
import { UserInsuranceStatus } from "../enum/UserInsuranceStatus";
import { Insurance } from "./Insurance";
import { User } from "./User";

@Entity()
export class UserInsurance {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({
      nullable:true
   })
   cardNumber: string;

   @Column()
   hasDental: boolean;

   @Column()
   status: UserInsuranceStatus;

   @Column({ type: 'decimal', precision: 10, scale: 2, default: 0, })
   montlhyCost: number;

   @Column()
   createdAt: Date;

   @Column()
   updatedAt: Date;
   
   @ManyToOne(() => Insurance, insurance => insurance.userInsurances) 
   insurance: Insurance;

   @OneToOne(() => User)    
   @JoinColumn()    
   user: User;
}