import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class HeadEnd {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column()
  user: string;
}
