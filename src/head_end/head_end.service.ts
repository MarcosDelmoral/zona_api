import { Injectable } from '@nestjs/common';
import { CreateHeadEndDto } from './dto/create-head_end.dto';
import { UpdateHeadEndDto } from './dto/update-head_end.dto';

@Injectable()
export class HeadEndService {
  create(createHeadEndDto: CreateHeadEndDto) {
    return 'This action adds a new headEnd';
  }

  findAll() {
    return `This action returns all headEnd`;
  }

  findOne(id: number) {
    return `This action returns a #${id} headEnd`;
  }

  update(id: number, updateHeadEndDto: UpdateHeadEndDto) {
    return `This action updates a #${id} headEnd`;
  }

  remove(id: number) {
    return `This action removes a #${id} headEnd`;
  }
}
