import { ApiProperty } from '@nestjs/swagger';
import { Tag } from '@prisma/client';

export class TagEntity implements Tag {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  lastUpdatedAt: Date;

  @ApiProperty()
  deleted: boolean;

  @ApiProperty()
  courseId: string;

  @ApiProperty()
  lessonId: string;
}
