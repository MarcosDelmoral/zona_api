import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export class ReportForm {
    @PrimaryGeneratedColumn()
    ID: Number;
    @Column()
    user_id: Number;
    @Column()
    head_end_id: Number;
    @CreateDateColumn()
    date: Date;
}