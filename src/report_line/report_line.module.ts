import { Module } from '@nestjs/common';
import { ReportLineService } from './report_line.service';
import { ReportLineController } from './report_line.controller';

@Module({
  controllers: [ReportLineController],
  providers: [ReportLineService],
})
export class ReportLineModule {}
