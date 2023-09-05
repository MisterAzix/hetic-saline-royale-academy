import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String, required: false })
  description: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  is_deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  achievement_id?: string;

  @ApiProperty({ type: String, required: false })
  badge_id?: string;

  @ApiProperty({ type: String, required: false })
  course_id?: string;
}
