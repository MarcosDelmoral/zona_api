import { Column, PrimaryGeneratedColumn } from "typeorm";

export class User {
    @PrimaryGeneratedColumn()
    ID: Number;
    @Column()
    user: String;
    @Column()
    pass: String;
    @Column()
    name: String;
    @Column()
    role_id: Number;
}
