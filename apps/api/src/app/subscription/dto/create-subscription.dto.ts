import { ApiProperty } from '@nestjs/swagger';

export class CreateSubscriptionDto {
  @ApiProperty({ type: String })
  plan: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  payed?: boolean;

  @ApiProperty({ type: Boolean, required: false, default: false })
  is_deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  user_id?: string;
}
