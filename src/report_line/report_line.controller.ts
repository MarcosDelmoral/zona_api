import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReportLineService } from './report_line.service';
import { CreateReportLineDto } from './dto/create-report_line.dto';
import { UpdateReportLineDto } from './dto/update-report_line.dto';

@Controller('report-line')
export class ReportLineController {
  constructor(private readonly reportLineService: ReportLineService) {}

  @Post()
  create(@Body() createReportLineDto: CreateReportLineDto) {
    return this.reportLineService.create(createReportLineDto);
  }

  @Get()
  findAll() {
    return this.reportLineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reportLineService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReportLineDto: UpdateReportLineDto) {
    return this.reportLineService.update(+id, updateReportLineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reportLineService.remove(+id);
  }
}
