import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateLessonDto {
  @ApiProperty({ type: String })
  @IsString()
  @Length(2, 100)
  title: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  @Length(10, 700)
  description?: string;

  @ApiProperty({ type: Number, required: false })
  @IsNumber()
  duration?: number;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  @IsString()
  chapterId?: string;

  @ApiProperty({ type: Array, required: false })
  @IsArray()
  images?: Prisma.LessonCreateInput['images'];

  @ApiProperty({ type: Array, required: false })
  @IsArray()
  videos?: Prisma.LessonCreateInput['videos'];

  @ApiProperty({ type: Array, required: false })
  @IsArray()
  tags?: Prisma.LessonCreateInput['tags'];

  @ApiProperty({ type: Array, required: false })
  @IsArray()
  ressources?: Prisma.LessonCreateInput['ressources'];
}
