import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
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
  @IsNotEmpty()
  criteria?: string;

  @ApiProperty({ type: Date, required: false })
  @IsDate()
  unlock_date?: Date;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  is_visible?: boolean;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  is_deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  @IsString()
  gamification_id?: string;

  @ApiProperty({ type: Object, required: false })
  @IsObject()
  category?: Prisma.AchievementCreateInput['category'];

  @ApiProperty({ type: Array, required: false })
  @IsArray()
  rewards?: Prisma.AchievementCreateInput['rewards'];

  @ApiProperty({ type: Array, required: false })
  @IsArray()
  badges?: Prisma.AchievementCreateInput['badges'];
}
