import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsString, IsUUID } from 'class-validator';

export class CreateAchievementDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty({ required: false })
  @IsString()
  description?: string;

  @ApiProperty({ required: false })
  @IsString()
  criteria?: string;

  @ApiProperty({ type: Date, required: false })
  @IsDate()
  unlockDate?: Date;

  @ApiProperty({ type: Boolean, required: false })
  @IsBoolean()
  visible?: boolean;

  @ApiProperty({ type: Boolean, required: false })
  @IsBoolean()
  deleted?: boolean;

  @ApiProperty({ required: false })
  @IsUUID()
  rewardId?: string;

  @ApiProperty({ required: false })
  @IsUUID()
  badgeId?: string;

  @ApiProperty({ required: false })
  @IsUUID()
  categoryId?: string;
}
