import { ApiProperty } from '@nestjs/swagger';

export class CreateProgressTrackerDto {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  courseId: string;

  @ApiProperty({ required: false })
  completedLessons?: number;

  @ApiProperty({ required: false })
  totalLessons?: number;

  @ApiProperty({ required: false })
  completedChapters?: number;

  @ApiProperty({ required: false })
  totalChapters?: number;

  @ApiProperty({ required: false })
  createdAt?: Date;

  @ApiProperty({ required: false })
  lastUpdatedAt?: Date;

  @ApiProperty({ required: false, default: false })
  deleted?: boolean;
}
