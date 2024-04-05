import { Column, PrimaryGeneratedColumn } from "typeorm";

export class ChannelList {
    @PrimaryGeneratedColumn()
    ID: Number;
    @Column()
    report_id: Number;
    @Column("decimal", { precision: 4, scale: 4 })
    data2: Number;
}
