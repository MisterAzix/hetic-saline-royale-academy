import { ApiProperty } from '@nestjs/swagger';
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
  images?: string[];

  @ApiProperty({ type: Array, required: false })
  @IsArray()
  videos?: string[];

  @ApiProperty({ type: Array, required: false })
  @IsArray()
  tags?: string[];

  @ApiProperty({ type: Array, required: false })
  @IsArray()
  ressources?: string[];
}
