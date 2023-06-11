import { ApiProperty } from '@nestjs/swagger';

export class CreateRewardDto {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty({ required: false })
  type?: string;

  @ApiProperty({ required: false })
  value?: number;

  @ApiProperty({ required: false })
  availability?: boolean;

  @ApiProperty({ required: false })
  unlockCriteria?: boolean;

  @ApiProperty({ required: false })
  redeemable?: boolean;

  @ApiProperty({ required: false })
  expirationDate?: Date;

  @ApiProperty({ required: false })
  createdAt?: Date;

  @ApiProperty({ required: false })
  lastUpdatedAt?: Date;

  @ApiProperty({ required: false })
  createdBy?: string;

  @ApiProperty({ required: false })
  lastUpdatedBy?: string;

  @ApiProperty({ required: false })
  deleted?: boolean;

  @ApiProperty({ required: false })
  accessLevel?: number;

  @ApiProperty({ required: false })
  categoryId?: string;
}
