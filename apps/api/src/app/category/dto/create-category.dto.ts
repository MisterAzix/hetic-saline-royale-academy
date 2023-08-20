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
  is_deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  @IsString()
  @IsString()
  achievement_id?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  @IsString()
  badge_id?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  @IsString()
  course_id?: string;
}
