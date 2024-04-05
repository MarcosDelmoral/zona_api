import { Module } from '@nestjs/common';
import { ReportFormService } from './report_form.service';
import { ReportFormController } from './report_form.controller';

@Module({
  controllers: [ReportFormController],
  providers: [ReportFormService],
})
export class ReportFormModule {}
