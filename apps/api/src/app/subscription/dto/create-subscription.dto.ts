import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateSubscriptionDto {
  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  plan: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  payed?: boolean;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  @ApiProperty({ required: false, default: false })
  is_deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  @IsString()
  user_id?: string;
}
