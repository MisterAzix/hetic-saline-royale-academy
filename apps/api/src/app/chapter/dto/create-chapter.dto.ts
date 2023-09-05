import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateChapterDto {
  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String, required: false })
  description?: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  is_deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  masterclass_id?: string;

  @ApiProperty({ type: String, required: false })
  course_id?: string;

  @ApiProperty({ type: Array, required: false })
  masterclasses?: Prisma.ChapterCreateInput['masterclasses'];
}
