import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class ChannelList {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column()
  report_id: number;
  @Column('decimal', { precision: 4, scale: 4 })
  data2: number;
}
