import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class User {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column()
  user: string;
  @Column()
  pass: string;
  @Column()
  name: string;
  @Column()
  role_id: number;
}
