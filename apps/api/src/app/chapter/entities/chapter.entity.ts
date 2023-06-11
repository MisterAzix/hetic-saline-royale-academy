import { ApiProperty } from '@nestjs/swagger';
import { Chapter } from '@prisma/client';

export class ChapterEntity implements Chapter {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  lastUpdatedAt: Date;

  @ApiProperty()
  deleted: boolean;

  @ApiProperty()
  lessonId: string;
}
