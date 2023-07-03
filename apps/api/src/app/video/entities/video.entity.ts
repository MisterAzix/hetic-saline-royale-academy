import { ApiProperty } from '@nestjs/swagger';
import { Video } from '@prisma/client';

export class VideoEntity implements Video {
  @ApiProperty()
  id: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  lastUpdatedAt: Date;

  @ApiProperty()
  deleted: boolean;

  @ApiProperty()
  description: string;

  @ApiProperty()
  height: number;

  @ApiProperty()
  width: number;

  @ApiProperty()
  lessonId: string;
}
