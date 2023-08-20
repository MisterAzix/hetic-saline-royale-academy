import { ApiProperty } from '@nestjs/swagger';
import { Badge } from '@prisma/client';

export class BadgeEntity implements Badge {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  @ApiProperty()
  criteria: string;

  @ApiProperty()
  level: string;

  @ApiProperty()
  unlock_date: Date;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  created_by: string;

  @ApiProperty()
  updated_by: string;

  @ApiProperty()
  is_visible: boolean;

  @ApiProperty()
  hidden_description: string;

  @ApiProperty()
  is_deleted: boolean;

  @ApiProperty()
  achievement_id: string;
}
