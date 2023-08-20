import { ApiProperty } from '@nestjs/swagger';
import { Course } from '@prisma/client';

export class CourseEntity implements Course {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  created_by: string;

  @ApiProperty()
  updated_by: string;

  @ApiProperty()
  is_deleted: boolean;

  @ApiProperty()
  user_id: string;

  @ApiProperty()
  progress_tracking_id: string;
}
