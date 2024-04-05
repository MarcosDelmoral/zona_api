import { PartialType } from '@nestjs/mapped-types';
import { CreateReportFormDto } from './create-report_form.dto';

export class UpdateReportFormDto extends PartialType(CreateReportFormDto) {}
