import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import {
  IsBoolean,
  IsNumber,
  IsObject,
  IsString,
  Length,
} from 'class-validator';

export class CreateGamificationDto {
  @ApiProperty({ type: String })
  @IsString()
  @Length(10, 700)
  description: string;

  @ApiProperty({ type: Number, required: false })
  @IsNumber()
  experience_point?: number;

  @ApiProperty({ type: String, required: false })
  @IsString()
  level?: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  is_deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  @IsString()
  user_id?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  progress_tracking_id?: string;

  @ApiProperty({ type: Object, required: false })
  @IsObject()
  achievement?: Prisma.GamificationCreateInput['achievement'];
}
