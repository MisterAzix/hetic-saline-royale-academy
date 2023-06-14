import { ApiProperty } from '@nestjs/swagger';
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

  @ApiProperty({ type: String, required: false })
  @IsString()
  createdBy?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  lastUpdatedBy?: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  @IsString()
  userId?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  progressTrackingId?: string;

  @ApiProperty({ type: Object, required: false })
  @IsObject()
  category?: object;

  @ApiProperty({ type: Array, required: false })
  @IsArray()
  chapters?: string[];

  @ApiProperty({ type: Array, required: false })
  @IsArray()
  tags?: string[];

  @ApiProperty({ type: Array, required: false })
  @IsArray()
  ressources?: string[];
}
