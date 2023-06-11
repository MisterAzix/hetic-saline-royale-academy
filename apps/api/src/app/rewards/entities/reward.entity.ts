import { ApiProperty } from '@nestjs/swagger';
import { Rewards } from '@prisma/client';

export class RewardEntity implements Rewards {
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
  unlockCriteria: boolean;

  @ApiProperty()
  redeemable: boolean;

  @ApiProperty()
  expirationDate: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  lastUpdatedAt: Date;

  @ApiProperty()
  createdBy: string;

  @ApiProperty()
  lastUpdatedBy: string;

  @ApiProperty()
  deleted: boolean;

  @ApiProperty()
  accessLevel: number;

  @ApiProperty()
  categoryId: string;
}
