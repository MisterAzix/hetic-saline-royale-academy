import { ApiProperty } from '@nestjs/swagger';
import { Category } from '@prisma/client';

export class CategoryEntity implements Category {
  @ApiProperty()
  description: string;

  @ApiProperty()
  achievement_id: string;

  @ApiProperty()
  badge_id: string;

  @ApiProperty()
  course_id: string;

  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  is_deleted: boolean;

  @ApiProperty()
  created_by: string;

  @ApiProperty()
  updated_by: string;
}
