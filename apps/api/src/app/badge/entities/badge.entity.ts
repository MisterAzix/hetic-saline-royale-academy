import { ApiProperty } from '@nestjs/swagger';
import { Badge } from '@prisma/client';

export class BadgeEntity implements Badge {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  @ApiProperty()
  criteria: string;

  @ApiProperty()
  level: string;

  @ApiProperty()
  unlock_date: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  lastUpdatedAt: Date;

  @ApiProperty()
  createdBy: string;

  @ApiProperty()
  lastUpdatedBy: string;

  @ApiProperty()
  visible: boolean;

  @ApiProperty()
  hiddenDescription: string;

  @ApiProperty()
  deleted: boolean;

  @ApiProperty()
  categoryId: string;

  @ApiProperty()
  achievementId: string;
}
