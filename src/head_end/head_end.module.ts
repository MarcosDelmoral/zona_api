import { Module } from '@nestjs/common';
import { HeadEndService } from './head_end.service';
import { HeadEndController } from './head_end.controller';

@Module({
  controllers: [HeadEndController],
  providers: [HeadEndService],
})
export class HeadEndModule {}
