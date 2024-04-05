import { Injectable } from '@nestjs/common';
import { CreateChannelListDto } from './dto/create-channel_list.dto';
import { UpdateChannelListDto } from './dto/update-channel_list.dto';

@Injectable()
export class ChannelListService {
  create(createChannelListDto: CreateChannelListDto) {
    return 'This action adds a new channelList';
  }

  findAll() {
    return `This action returns all channelList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} channelList`;
  }

  update(id: number, updateChannelListDto: UpdateChannelListDto) {
    return `This action updates a #${id} channelList`;
  }

  remove(id: number) {
    return `This action removes a #${id} channelList`;
  }
}
