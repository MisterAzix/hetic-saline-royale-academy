import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsObject,
  IsString,
  Length,
} from 'class-validator';

export class CreateAchievementDto {
  @ApiProperty({ type: String })
  @IsString()
  @Length(2, 100)
  title: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  @Length(10, 700)
  description?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  lastUpdatedBy?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  createdBy?: string;

  @ApiProperty({ type: String, required: false })
  @IsNotEmpty()
  criteria?: string;

  @ApiProperty({ type: Date, required: false })
  @IsDate()
  unlockDate?: Date;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  visible?: boolean;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  @IsString()
  gamificationId?: string;

  @ApiProperty({ type: Object, required: false })
  @IsObject()
  category?: object;

  @ApiProperty({ type: Array, required: false })
  @IsArray()
  rewards?: string[];

  @ApiProperty({ type: Array, required: false })
  @IsArray()
  badges?: string[];
}
