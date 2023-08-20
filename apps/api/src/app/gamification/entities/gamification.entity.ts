import { ApiProperty } from '@nestjs/swagger';
import { Gamification } from '@prisma/client';

export class GamificationEntity implements Gamification {
  @ApiProperty()
  id: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  experience_point: number;

  @ApiProperty()
  level: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  is_deleted: boolean;

  @ApiProperty()
  progress_tracking_id: string;

  @ApiProperty()
  user_id: string;
}
