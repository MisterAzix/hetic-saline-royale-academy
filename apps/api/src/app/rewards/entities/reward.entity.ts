import { ApiProperty } from '@nestjs/swagger';
import { Reward } from '@prisma/client';

export class RewardEntity implements Reward {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  value: number;

  @ApiProperty()
  availability: boolean;

  @ApiProperty()
  unlock_criteria: boolean;

  @ApiProperty()
  redeemable: boolean;

  @ApiProperty()
  expiration_date: Date;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  created_by: string;

  @ApiProperty()
  updated_by: string;

  @ApiProperty()
  is_deleted: boolean;

  @ApiProperty()
  access_level: number;

  @ApiProperty()
  achievement_id: string;
}
