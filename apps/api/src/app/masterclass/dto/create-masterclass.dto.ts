import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateMasterclassDto {
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

  @ApiProperty({ type: String, required: false })
  @IsString()
  video_url: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  is_deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  @IsString()
  chapter_id?: string;

  @ApiProperty({ type: Array, required: false })
  @IsArray()
  tags?: Prisma.MasterclassCreateInput['tags'];
}
