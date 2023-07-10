import { ApiProperty } from '@nestjs/swagger';
import { Lesson } from '@prisma/client';

export class LessonEntity implements Lesson {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  duration: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  lastUpdatedAt: Date;

  @ApiProperty()
  deleted: boolean;

  @ApiProperty()
  chapterId: string;
}
