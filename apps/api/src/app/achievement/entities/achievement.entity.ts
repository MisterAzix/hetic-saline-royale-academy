import { ApiProperty } from '@nestjs/swagger';
import { Achievement } from '@prisma/client';

export class AchievementEntity implements Achievement {
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
  lastUpdatedBy: string;

  @ApiProperty()
  createdBy: string;

  @ApiProperty()
  criteria: string;

  @ApiProperty()
  unlockDate: Date;

  @ApiProperty()
  visible: boolean;

  @ApiProperty()
  deleted: boolean;

  @ApiProperty()
  rewardId: string;

  @ApiProperty()
  badgeId: string;

  @ApiProperty()
  categoryId: string;

  @ApiProperty()
  gamificationId: string;
}
