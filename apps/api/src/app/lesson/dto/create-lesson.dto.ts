import { ApiProperty } from '@nestjs/swagger';

export class CreateLessonDto {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty({ required: false })
  createdAt?: Date;

  @ApiProperty({ required: false })
  lastUpdatedAt?: Date;

  @ApiProperty({ required: false })
  deleted?: boolean;

  @ApiProperty({ required: false })
  imageId?: string;

  @ApiProperty({ required: false })
  videoId?: string;

  @ApiProperty({ required: false })
  tagId?: string;
}
