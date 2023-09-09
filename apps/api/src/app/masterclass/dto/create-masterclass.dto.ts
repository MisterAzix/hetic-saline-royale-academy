import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateMasterclassDto {
  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String, required: false })
  description?: string;

  @ApiProperty({ type: Number, required: false })
  duration?: number;

  @ApiProperty({ type: String, required: false })
  video_url: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  is_deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  chapter_id?: string;

  @ApiProperty({ type: Array, required: false })
  tags?: Prisma.MasterclassCreateInput['tags'];
}
