import { ApiProperty } from '@nestjs/swagger';

export class CreateNotificationDto {
  @ApiProperty({ type: String })
  message: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  published?: boolean;

  @ApiProperty({ type: Boolean, required: false, default: false })
  is_deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  user_id?: string;
}
