import { ApiProperty } from '@nestjs/swagger';

export class CreateImageDto {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  url: string;

  @ApiProperty({ required: false })
  createdAt?: Date;

  @ApiProperty({ required: false })
  lastUpdatedAt?: Date;

  @ApiProperty({ required: false, default: false })
  deleted?: boolean;
}
