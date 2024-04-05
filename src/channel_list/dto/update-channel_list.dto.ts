import { PartialType } from '@nestjs/mapped-types';
import { CreateChannelListDto } from './create-channel_list.dto';

export class UpdateChannelListDto extends PartialType(CreateChannelListDto) {}
