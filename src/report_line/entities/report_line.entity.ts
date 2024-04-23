import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class ReportLine {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column()
  report_id: number;
  @Column()
  channel_id: number;
  @Column('decimal', { precision: 5, scale: 2 })
  data1: number;
  @Column('decimal', { precision: 5, scale: 2 })
  data2: number;
  @Column()
  observation: string;
  @Column()
  Type: string;
  @CreateDateColumn()
  date: Date;
}
