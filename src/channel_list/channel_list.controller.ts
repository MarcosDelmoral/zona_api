import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChannelListService } from './channel_list.service';
import { CreateChannelListDto } from './dto/create-channel_list.dto';
import { UpdateChannelListDto } from './dto/update-channel_list.dto';

@Controller('channel-list')
export class ChannelListController {
  constructor(private readonly channelListService: ChannelListService) {}

  @Post()
  create(@Body() createChannelListDto: CreateChannelListDto) {
    return this.channelListService.create(createChannelListDto);
  }

  @Get()
  findAll() {
    return this.channelListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.channelListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChannelListDto: UpdateChannelListDto) {
    return this.channelListService.update(+id, updateChannelListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.channelListService.remove(+id);
  }
}
