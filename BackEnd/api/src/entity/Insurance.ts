import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"; 
import { InsuranceType } from "../enum/InsuranceType";
import { UserInsurance } from "./UserInsurance";

@Entity()
export class Insurance {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   type: InsuranceType;

   @Column({ type: 'decimal', precision: 10, scale: 2, default: 0, })
   value1: number;
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0, })
   value2: number;
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0, })
   value3: number;
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0, })
   value4: number;
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0, })
   value5: number;
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0, })
   value6: number;
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0, })
   value7: number;
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0, })
   value8: number;
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0, })
   value9: number;
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0, })
   value10: number;

   @Column()
   createdAt: Date;

   @Column()
   updatedAt: Date;

   @OneToMany(() => UserInsurance, userInsurance => userInsurance.insurance)
   userInsurances: UserInsurance [];
}