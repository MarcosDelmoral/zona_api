import { Module } from '@nestjs/common';
import { ChannelListService } from './channel_list.service';
import { ChannelListController } from './channel_list.controller';

@Module({
  controllers: [ChannelListController],
  providers: [ChannelListService],
})
export class ChannelListModule {}
