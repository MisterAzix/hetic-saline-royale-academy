import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsString, Matches } from 'class-validator';

export class CreateChapterDto {
  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  @Matches(/^\d{2}:\d{2}:\d{2}$/)
  timecode: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  is_deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  masterclass_id?: string;

  @ApiProperty({ type: String, required: false })
  course_id?: string;

  @ApiProperty({ type: Array, required: false })
  masterclass?: Prisma.ChapterCreateInput['masterclass'];
}
