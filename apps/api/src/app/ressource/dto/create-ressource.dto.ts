import { ApiProperty } from '@nestjs/swagger';

export class CreateRessourceDto {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  duration?: Date;

  @ApiProperty({ required: false })
  createdAt?: Date;

  @ApiProperty({ required: false })
  lastUpdatedAt?: Date;

  @ApiProperty({ required: false, default: false })
  deleted?: boolean;
}
