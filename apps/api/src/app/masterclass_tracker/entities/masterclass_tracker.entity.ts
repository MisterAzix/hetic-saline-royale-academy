import { ApiProperty } from '@nestjs/swagger';
import { MasterclassTracker } from '@prisma/client';

export class MasterclassTrackerEntity implements MasterclassTracker {
  @ApiProperty()
  id: string;
  @ApiProperty()
  masterclass_id: string;
  @ApiProperty()
  progression: number;
  @ApiProperty()
  is_deleted: boolean;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;
  @ApiProperty()
  user_id: string;
}
