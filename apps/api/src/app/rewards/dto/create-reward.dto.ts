import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsNumber, IsString, Length } from 'class-validator';

export class CreateRewardDto {
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
  type?: string;

  @ApiProperty({ type: Number, required: false })
  @IsNumber()
  value?: number;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  availability?: boolean;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  unlockCriteria?: boolean;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  redeemable?: boolean;

  @ApiProperty({ type: Date, required: false, default: false })
  @IsDate()
  expirationDate?: Date;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  deleted?: boolean;

  @ApiProperty({ type: Number, required: false })
  @IsNumber()
  accessLevel?: number;

  @ApiProperty({ type: String, required: false })
  @IsString()
  achievementId?: string;
}
