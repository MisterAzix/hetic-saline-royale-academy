import { ApiProperty } from '@nestjs/swagger';
import { Subscription } from '@prisma/client';

export class SubscriptionEntity implements Subscription {
  @ApiProperty()
  id: string;

  @ApiProperty()
  plan: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  lastUpdatedAt: Date;

  @ApiProperty()
  deleted: boolean;
}
