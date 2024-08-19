import { Column, Entity, PrimaryColumn, } from "typeorm";

@Entity()
export class FinancialRecord {
    @PrimaryColumn()
    id: number

    @Column()
    userId: number

    @Column()
    amount: number

    @Column()
    interestRate: number

    @Column()
    status: string
}