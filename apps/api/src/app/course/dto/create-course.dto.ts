import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import {
  IsArray,
  IsBoolean,
  IsObject,
  IsString,
  Length,
} from 'class-validator';

export class CreateCourseDto {
  @ApiProperty({ type: String })
  @IsString()
  @Length(2, 100)
  title: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  @Length(10, 700)
  description?: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  is_deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  @IsString()
  user_id?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  progress_tracking_id?: string;

  @ApiProperty({ type: Object, required: false })
  @IsObject()
  category?: Prisma.CourseCreateInput['category'];

  @ApiProperty({ type: Array, required: false })
  @IsArray()
  chapters?: Prisma.CourseCreateInput['chapters'];

  @ApiProperty({ type: Array, required: false })
  @IsArray()
  tags?: Prisma.CourseCreateInput['tags'];
}
