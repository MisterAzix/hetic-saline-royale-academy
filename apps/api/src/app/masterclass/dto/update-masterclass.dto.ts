import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterclassDto } from './create-masterclass.dto';
import { Chapter } from '@prisma/client';
import { Type } from 'class-transformer';
import { CreateChapterDto } from '../../chapter/dto/create-chapter.dto';

export class UpdateMasterclassDto extends PartialType(CreateMasterclassDto) {
  @Type(() => CreateChapterDto)
  chapters?: Chapter[];
}
