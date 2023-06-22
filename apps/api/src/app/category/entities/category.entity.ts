import { ApiProperty } from '@nestjs/swagger';
import { Category } from '@prisma/client';

export class CategoryEntity implements Category {
  @ApiProperty()
  description: string;

  @ApiProperty()
  achievementId: string;

  @ApiProperty()
  badgeId: string;

  @ApiProperty()
  courseId: string;

  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  lastUpdatedAt: Date;

  @ApiProperty()
  deleted: boolean;

  @ApiProperty()
  createdBy: string;

  @ApiProperty()
  lastUpdatedBy: string;
}
