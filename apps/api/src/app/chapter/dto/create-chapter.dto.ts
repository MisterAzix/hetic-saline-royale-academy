import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsArray, IsBoolean, IsString, Length, Matches } from 'class-validator';

export class CreateChapterDto {
  @ApiProperty({ type: String })
  @IsString()
  @Length(2, 100)
  title: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  @Matches(/^\d{2}:\d{2}:\d{2}$/)
  timecode: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  is_deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  @IsString()
  masterclass_id?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  course_id?: string;

  @ApiProperty({ type: Array, required: false })
  @IsArray()
  masterclass?: Prisma.ChapterCreateInput['masterclass'];
}
