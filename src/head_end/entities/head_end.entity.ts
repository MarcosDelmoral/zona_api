import { Column, PrimaryGeneratedColumn } from "typeorm";

export class HeadEnd {
    @PrimaryGeneratedColumn()
    ID: Number;
    @Column()
    user: String;
}
