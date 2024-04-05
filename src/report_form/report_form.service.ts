import { Injectable } from '@nestjs/common';
import { CreateReportFormDto } from './dto/create-report_form.dto';
import { UpdateReportFormDto } from './dto/update-report_form.dto';

@Injectable()
export class ReportFormService {
  create(createReportFormDto: CreateReportFormDto) {
    return 'This action adds a new reportForm';
  }

  findAll() {
    return `This action returns all reportForm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reportForm`;
  }

  update(id: number, updateReportFormDto: UpdateReportFormDto) {
    return `This action updates a #${id} reportForm`;
  }

  remove(id: number) {
    return `This action removes a #${id} reportForm`;
  }
}
