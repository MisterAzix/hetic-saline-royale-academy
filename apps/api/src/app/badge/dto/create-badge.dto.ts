import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsBoolean, IsDate, IsObject, IsString, Length } from 'class-validator';

export class CreateBadgeDto {
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
  criteria?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  level?: string;

  @ApiProperty({ type: Date, required: false })
  @IsDate()
  unlock_date?: Date;

  @ApiProperty({ type: Boolean, required: false })
  @IsBoolean()
  visible?: boolean;

  @ApiProperty({ type: String, required: false })
  @IsString()
  hiddenDescription?: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  @IsString()
  achievementId?: string;

  @ApiProperty({ type: Object, required: false })
  @IsObject()
  category?: Prisma.BadgeCreateInput['category'];

  @ApiProperty({ type: Object, required: false })
  @IsObject()
  ressource?: Prisma.BadgeCreateInput['ressource'];
}
