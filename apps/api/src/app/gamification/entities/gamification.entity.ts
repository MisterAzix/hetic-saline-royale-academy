import { ApiProperty } from '@nestjs/swagger';
import { Gamification } from '@prisma/client';

export class GamificationEntity implements Gamification {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  achievementId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  lastUpdatedAt: Date;

  @ApiProperty()
  deleted: boolean;

  @ApiProperty()
  description: string;

  @ApiProperty()
  experiencePoint: number;

  @ApiProperty()
  level: string;

  @ApiProperty()
  ressourceId: string;

  @ApiProperty()
  progressTrackingId: string;
}
