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
  createdAt: Date;

  @ApiProperty()
  lastUpdatedAt: Date;

  @ApiProperty()
  createdBy: string;

  @ApiProperty()
  lastUpdatedBy: string;

  @ApiProperty()
  deleted: boolean;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  chapterId: string;

  @ApiProperty()
  tagId: string;

  @ApiProperty()
  ressourceId: string;

  @ApiProperty()
  categoryId: string;
}
