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
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  is_deleted: boolean;

  @ApiProperty()
  user_id: string;
}
