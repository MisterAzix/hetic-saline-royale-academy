import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateCourseDto {
  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String, required: false })
  description?: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  is_deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  user_id?: string;

  @ApiProperty({ type: String, required: false })
  progress_tracking_id?: string;

  @ApiProperty({ type: Object, required: false })
  category?: Prisma.CourseCreateInput['category'];

  @ApiProperty({ type: Array, required: false })
  chapters?: Prisma.CourseCreateInput['chapters'];

  @ApiProperty({ type: Array, required: false })
  tags?: Prisma.CourseCreateInput['tags'];
}
