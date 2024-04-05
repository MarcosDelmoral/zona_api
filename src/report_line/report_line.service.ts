import { Injectable } from '@nestjs/common';
import { CreateReportLineDto } from './dto/create-report_line.dto';
import { UpdateReportLineDto } from './dto/update-report_line.dto';

@Injectable()
export class ReportLineService {
  create(createReportLineDto: CreateReportLineDto) {
    return 'This action adds a new reportLine';
  }

  findAll() {
    return `This action returns all reportLine`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reportLine`;
  }

  update(id: number, updateReportLineDto: UpdateReportLineDto) {
    return `This action updates a #${id} reportLine`;
  }

  remove(id: number) {
    return `This action removes a #${id} reportLine`;
  }
}
