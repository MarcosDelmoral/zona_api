import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReportFormService } from './report_form.service';
import { CreateReportFormDto } from './dto/create-report_form.dto';
import { UpdateReportFormDto } from './dto/update-report_form.dto';

@Controller('report-form')
export class ReportFormController {
  constructor(private readonly reportFormService: ReportFormService) {}

  @Post()
  create(@Body() createReportFormDto: CreateReportFormDto) {
    return this.reportFormService.create(createReportFormDto);
  }

  @Get()
  findAll() {
    return this.reportFormService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reportFormService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReportFormDto: UpdateReportFormDto) {
    return this.reportFormService.update(+id, updateReportFormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reportFormService.remove(+id);
  }
}
