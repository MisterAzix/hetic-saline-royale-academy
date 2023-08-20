import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateNotificationDto {
  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  published?: boolean;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  is_deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  @IsString()
  user_id?: string;
}
