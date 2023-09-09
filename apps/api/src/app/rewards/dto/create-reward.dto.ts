import { ApiProperty } from '@nestjs/swagger';

export class CreateRewardDto {
  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String, required: false })
  description?: string;

  @ApiProperty({ type: String, required: false })
  type?: string;

  @ApiProperty({ type: Number, required: false })
  value?: number;

  @ApiProperty({ type: Boolean, required: false, default: false })
  availability?: boolean;

  @ApiProperty({ type: Boolean, required: false, default: false })
  unlock_criteria?: boolean;

  @ApiProperty({ type: Boolean, required: false, default: false })
  redeemable?: boolean;

  @ApiProperty({ type: Date, required: false, default: false })
  expiration_date?: Date;

  @ApiProperty({ type: Boolean, required: false, default: false })
  is_deleted?: boolean;

  @ApiProperty({ type: Number, required: false })
  access_level?: number;

  @ApiProperty({ type: String, required: false })
  achievement_id?: string;
}
