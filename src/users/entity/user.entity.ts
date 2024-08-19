import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { FinancialRecord } from "src/microcredits/entity/microcredits.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    creditScore: number;

    @Column({default: true})
    financialHistory: FinancialRecord[];
}