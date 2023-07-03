import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsBoolean, IsNumber, IsObject, IsString } from 'class-validator';

export class CreateProgressTrackerDto {
  @ApiProperty({ type: String, required: false })
  @IsString()
  userId: string;

  @ApiProperty({ type: Number, required: false })
  @IsNumber()
  progress?: number;

  @ApiProperty({ type: String, required: false })
  @IsString()
  courseId: string;

  @ApiProperty({ type: Number, required: false })
  @IsNumber()
  completedLessons?: number;

  @ApiProperty({ type: Number, required: false })
  @IsNumber()
  totalLessons?: number;

  @ApiProperty({ type: Number, required: false })
  @IsNumber()
  completedChapters?: number;

  @ApiProperty({ type: Number, required: false })
  @IsNumber()
  totalChapters?: number;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  deleted?: boolean;

  @ApiProperty({ type: Object, required: false })
  @IsObject()
  course?: object;

  @ApiProperty({ type: Object, required: false })
  @IsObject()
  gamifications?: Prisma.ProgressTrackerCreateInput['gamifications'];
}
