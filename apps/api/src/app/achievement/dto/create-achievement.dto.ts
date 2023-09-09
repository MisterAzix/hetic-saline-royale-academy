import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsString } from 'class-validator';

export class CreateAchievementDto {
  @ApiProperty({ type: String })
  @IsString()
  title: string;

  @ApiProperty({ type: String, required: false })
  description?: string;

  @ApiProperty({ type: String, required: false })
  criteria?: string;

  @ApiProperty({ type: Date, required: false })
  unlock_date?: Date;

  @ApiProperty({ type: Boolean, required: false, default: false })
  is_visible?: boolean;

  @ApiProperty({ type: Boolean, required: false, default: false })
  is_deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  gamification_id?: string;

  @ApiProperty({ type: Object, required: false })
  category?: Prisma.AchievementCreateInput['category'];

  @ApiProperty({ type: Array, required: false })
  rewards?: Prisma.AchievementCreateInput['rewards'];

  @ApiProperty({ type: Array, required: false })
  badges?: Prisma.AchievementCreateInput['badges'];
}
