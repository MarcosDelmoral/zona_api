import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class ReportForm {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column()
  user_id: number;
  @Column()
  head_end_id: number;
  @CreateDateColumn()
  date: Date;
}
