import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Role {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column()
  user: string;
}
