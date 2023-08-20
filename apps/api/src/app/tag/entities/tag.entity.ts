import { ApiProperty } from '@nestjs/swagger';
import { Tag } from '@prisma/client';

export class TagEntity implements Tag {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

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
