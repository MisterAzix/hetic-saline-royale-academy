import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString, Length } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ type: String })
  @IsString()
  @Length(2, 100)
  name: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  @Length(10, 700)
  description: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  @IsString()
  @IsString()
  achievementId?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  @IsString()
  badgeId?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  @IsString()
  courseId?: string;
}
