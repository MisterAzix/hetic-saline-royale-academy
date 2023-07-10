import { ApiProperty } from '@nestjs/swagger';
import { Image } from '@prisma/client';

export class ImageEntity implements Image {
  @ApiProperty()
  id: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  height: number;

  @ApiProperty()
  width: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  lastUpdatedAt: Date;

  @ApiProperty()
  deleted: boolean;

  @ApiProperty()
  lessonId: string;

  @ApiProperty()
  userId: string;
}
