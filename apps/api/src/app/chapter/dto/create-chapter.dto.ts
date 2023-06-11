import { ApiProperty } from '@nestjs/swagger';

export class CreateChapterDto {
  @ApiProperty()
  title?: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  createdAt?: Date;

  @ApiProperty()
  lastUpdatedAt?: Date;

  @ApiProperty()
  deleted?: boolean;

  @ApiProperty()
  lessonId?: string;
}
