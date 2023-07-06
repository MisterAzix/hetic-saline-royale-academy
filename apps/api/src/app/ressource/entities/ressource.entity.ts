import { ApiProperty } from '@nestjs/swagger';
import { Ressource } from '@prisma/client';

export class RessourceEntity implements Ressource {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  duration: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  lastUpdatedAt: Date;

  @ApiProperty()
  deleted: boolean;

  @ApiProperty()
  path: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  accessLevel: string;

  @ApiProperty()
  courseId: string;

  @ApiProperty()
  gamificationId: string;

  @ApiProperty()
  bagdeId: string;

  @ApiProperty()
  lessonId: string;
}
