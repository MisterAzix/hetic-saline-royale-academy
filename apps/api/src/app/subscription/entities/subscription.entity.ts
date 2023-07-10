import { ApiProperty } from '@nestjs/swagger';
import { Subscription } from '@prisma/client';

export class SubscriptionEntity implements Subscription {
  @ApiProperty()
  id: string;

  @ApiProperty()
  plan: string;

  @ApiProperty()
  payed: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  lastUpdatedAt: Date;

  @ApiProperty()
  deleted: boolean;

  @ApiProperty()
  userId: string;
}
