import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty({ required: false })
  createdAt?: Date;

  @ApiProperty({ required: false })
  lastUpdatedAt?: Date;

  @ApiProperty({ required: false })
  createdBy?: string;

  @ApiProperty({ required: false })
  lastUpdatedBy?: string;

  @ApiProperty({ required: false })
  deleted?: boolean;

  @ApiProperty({ required: false })
  userId?: string;

  @ApiProperty({ required: false })
  chapterId?: string;

  @ApiProperty({ required: false })
  tagId?: string;

  @ApiProperty({ required: false })
  ressourceId?: string;

  @ApiProperty({ required: false })
  categoryId?: string;
}
