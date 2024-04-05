import { PartialType } from '@nestjs/mapped-types';
import { CreateReportLineDto } from './create-report_line.dto';

export class UpdateReportLineDto extends PartialType(CreateReportLineDto) {}
