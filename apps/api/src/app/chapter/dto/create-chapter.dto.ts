import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsArray, IsBoolean, IsDate, IsString, Length } from 'class-validator';

export class CreateChapterDto {
  @ApiProperty({ type: String })
  @IsString()
  @Length(2, 100)
  title: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  @Length(10, 700)
  description?: string;

  @ApiProperty({ type: Date, required: false })
  @IsDate()
  lastUpdatedAt?: Date;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  @IsString()
  lessonId?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  courseId?: string;

  @ApiProperty({ type: Array, required: false })
  @IsArray()
  lessons?: Prisma.ChapterCreateInput['lessons'];
}
