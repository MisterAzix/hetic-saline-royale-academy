import { ApiProperty } from '@nestjs/swagger';
import { Chapter } from '@prisma/client';

export class ChapterEntity implements Chapter {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  timecode: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  is_deleted: boolean;

  @ApiProperty()
  course_id: string;

  @ApiProperty()
  masterclass_id: string;
}
