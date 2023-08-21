import { ApiProperty } from '@nestjs/swagger';
import { Masterclass, Status } from '@prisma/client';

export class MasterclassEntity implements Masterclass {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  duration: number;

  @ApiProperty()
  chapter_id: string;

  @ApiProperty()
  cover_url: string;

  @ApiProperty()
  video_url: string;

  @ApiProperty()
  status: Status;

  @ApiProperty()
  is_deleted: boolean;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}
