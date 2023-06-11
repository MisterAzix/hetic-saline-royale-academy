import { ApiProperty } from '@nestjs/swagger';
import { Progress_tracker } from '@prisma/client';

export class ProgressTrackerEntity implements Progress_tracker {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  courseId: string;

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
}
