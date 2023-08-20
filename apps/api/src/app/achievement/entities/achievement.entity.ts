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
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  updated_by: string;

  @ApiProperty()
  created_by: string;

  @ApiProperty()
  criteria: string;

  @ApiProperty()
  unlock_date: Date;

  @ApiProperty()
  is_visible: boolean;

  @ApiProperty()
  is_deleted: boolean;

  @ApiProperty()
  gamification_id: string;
}
