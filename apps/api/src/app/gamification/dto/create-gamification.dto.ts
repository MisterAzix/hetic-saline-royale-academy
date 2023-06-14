import { ApiProperty } from '@nestjs/swagger';
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
  experiencePoint?: number;

  @ApiProperty({ type: String, required: false })
  @IsString()
  level?: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  @IsString()
  userId?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  ressourceId?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  progressTrackingId?: string;

  @ApiProperty({ type: Object, required: false })
  @IsObject()
  achievement?: object;

  @ApiProperty({ type: Object, required: false })
  @IsObject()
  ressource?: object;
}
