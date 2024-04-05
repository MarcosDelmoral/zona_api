import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export class ReportLine {
    @PrimaryGeneratedColumn()
    ID: Number;
    @Column()
    report_id: Number;
    @Column()
    channel_id: Number;
    @Column("decimal", { precision: 5, scale: 2 })
    data1: Number;
    @Column("decimal", { precision: 5, scale: 2 })
    data2: Number;
    @Column()
    observation: String;
    @Column()
    Type: String;
    @CreateDateColumn()
    date: Date;
}
