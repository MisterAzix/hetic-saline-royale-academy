import { ApiProperty } from '@nestjs/swagger';
import { ProgressTracker } from '@prisma/client';

export class ProgressTrackerEntity implements ProgressTracker {
  @ApiProperty()
  id: string;

  @ApiProperty()
  progress: number;

  @ApiProperty()
  completed_masterclasses: number;

  @ApiProperty()
  total_masterclasses: number;

  @ApiProperty()
  completed_chapters: number;

  @ApiProperty()
  total_chapters: number;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  is_deleted: boolean;

  @ApiProperty()
  user_id: string;
}
