import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsBoolean, IsNumber, IsObject, IsString } from 'class-validator';

export class CreateProgressTrackerDto {
  @ApiProperty({ type: String, required: false })
  @IsString()
  user_id: string;

  @ApiProperty({ type: Number, required: false })
  @IsNumber()
  progress?: number;

  @ApiProperty({ type: String, required: false })
  @IsString()
  course_id?: string;

  @ApiProperty({ type: Number, required: false })
  @IsNumber()
  completedMasterclasses?: number;

  @ApiProperty({ type: Number, required: false })
  @IsNumber()
  totalMasterclasses?: number;

  @ApiProperty({ type: Number, required: false })
  @IsNumber()
  completed_chapters?: number;

  @ApiProperty({ type: Number, required: false })
  @IsNumber()
  total_chapters?: number;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  is_deleted?: boolean;

  @ApiProperty({ type: Object, required: false })
  @IsObject()
  course?: object;

  @ApiProperty({ type: Object, required: false })
  @IsObject()
  gamifications?: Prisma.ProgressTrackerCreateInput['gamifications'];
}
