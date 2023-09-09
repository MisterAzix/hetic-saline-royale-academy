import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateProgressTrackerDto {
  @ApiProperty({ type: String, required: false })
  user_id: string;

  @ApiProperty({ type: Number, required: false })
  progress?: number;

  @ApiProperty({ type: String, required: false })
  course_id: string;

  @ApiProperty({ type: Number, required: false })
  completedMasterclasses?: number;

  @ApiProperty({ type: Number, required: false })
  totalMasterclasses?: number;

  @ApiProperty({ type: Number, required: false })
  completed_chapters?: number;

  @ApiProperty({ type: Number, required: false })
  total_chapters?: number;

  @ApiProperty({ type: Boolean, required: false, default: false })
  is_deleted?: boolean;

  @ApiProperty({ type: Object, required: false })
  course?: object;

  @ApiProperty({ type: Object, required: false })
  gamifications?: Prisma.ProgressTrackerCreateInput['gamifications'];
}
