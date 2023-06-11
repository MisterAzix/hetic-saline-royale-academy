import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  createdAt?: Date;

  @ApiProperty()
  lastUpdatedAt?: Date;

  @ApiProperty()
  deleted?: boolean;
}
