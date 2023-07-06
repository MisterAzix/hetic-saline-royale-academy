import { ApiProperty } from '@nestjs/swagger';
import { Image } from '@prisma/client';

export class ImageEntity implements Image {
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

  @ApiProperty()
  userId: string;
}
