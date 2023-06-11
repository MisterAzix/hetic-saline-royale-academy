import { ApiProperty } from '@nestjs/swagger';
import { Ressource } from '@prisma/client';

export class RessourceEntity implements Ressource {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  duration: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  lastUpdatedAt: Date;

  @ApiProperty()
  deleted: boolean;
}
