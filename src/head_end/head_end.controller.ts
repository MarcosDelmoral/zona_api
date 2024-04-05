import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HeadEndService } from './head_end.service';
import { CreateHeadEndDto } from './dto/create-head_end.dto';
import { UpdateHeadEndDto } from './dto/update-head_end.dto';

@Controller('head-end')
export class HeadEndController {
  constructor(private readonly headEndService: HeadEndService) {}

  @Post()
  create(@Body() createHeadEndDto: CreateHeadEndDto) {
    return this.headEndService.create(createHeadEndDto);
  }

  @Get()
  findAll() {
    return this.headEndService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.headEndService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHeadEndDto: UpdateHeadEndDto) {
    return this.headEndService.update(+id, updateHeadEndDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.headEndService.remove(+id);
  }
}
