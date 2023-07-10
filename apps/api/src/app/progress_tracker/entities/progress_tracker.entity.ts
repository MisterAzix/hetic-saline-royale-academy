import { ApiProperty } from '@nestjs/swagger';
import { ProgressTracker } from '@prisma/client';

export class ProgressTrackerEntity implements ProgressTracker {
  @ApiProperty()
  id: string;

  @ApiProperty()
  progress: number;

  @ApiProperty()
  completedLessons: number;

  @ApiProperty()
  totalLessons: number;

  @ApiProperty()
  completedChapters: number;

  @ApiProperty()
  totalChapters: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  lastUpdatedAt: Date;

  @ApiProperty()
  deleted: boolean;

  @ApiProperty()
  userId: string;
}
