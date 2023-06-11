import { ApiProperty } from '@nestjs/swagger';

export class CreateBadgeDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  criteria?: string;

  @ApiProperty()
  level?: string;

  @ApiProperty()
  unlock_date?: Date;

  @ApiProperty()
  createdBy?: string;

  @ApiProperty()
  lastUpdatedBy?: string;

  @ApiProperty()
  visible?: boolean;

  @ApiProperty()
  hiddenDescription?: string;

  @ApiProperty()
  deleted?: boolean;

  @ApiProperty()
  categoryId?: string;
}
