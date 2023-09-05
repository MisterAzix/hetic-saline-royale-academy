import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsString } from 'class-validator';

export class CreateBadgeDto {
  @ApiProperty({ type: String })
  @IsString()
  title: string;

  @ApiProperty({ type: String, required: false })
  description?: string;

  @ApiProperty({ type: String, required: false })
  criteria?: string;

  @ApiProperty({ type: String, required: false })
  level?: string;

  @ApiProperty({ type: Date, required: false })
  unlock_date?: Date;

  @ApiProperty({ type: Boolean, required: false })
  is_visible?: boolean;

  @ApiProperty({ type: String, required: false })
  hidden_description?: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  is_deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  achievement_id?: string;

  @ApiProperty({ type: Object, required: false })
  category?: Prisma.BadgeCreateInput['category'];
}
