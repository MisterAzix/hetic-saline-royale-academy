import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsNumber } from 'class-validator';

export class CreateGamificationDto {
  @ApiProperty({ type: String })
  description: string;

  @ApiProperty({ type: Number, required: false })
  @IsNumber()
  experience_point?: number;

  @ApiProperty({ type: String, required: false })
  level?: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  is_deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  user_id?: string;

  @ApiProperty({ type: String, required: false })
  progress_tracking_id?: string;

  @ApiProperty({ type: Object, required: false })
  achievement?: Prisma.GamificationCreateInput['achievement'];
}
