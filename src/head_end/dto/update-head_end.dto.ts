import { PartialType } from '@nestjs/mapped-types';
import { CreateHeadEndDto } from './create-head_end.dto';

export class UpdateHeadEndDto extends PartialType(CreateHeadEndDto) {}
