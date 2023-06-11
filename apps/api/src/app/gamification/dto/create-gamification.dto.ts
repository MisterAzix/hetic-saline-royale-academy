import { ApiProperty } from '@nestjs/swagger';

export class CreateGamificationDto {
  @ApiProperty()
  userId?: string;

  @ApiProperty({ required: false })
  achievementId?: string;

  @ApiProperty({ required: false })
  createdAt?: Date;

  @ApiProperty({ required: false })
  lastUpdatedAt?: Date;

  @ApiProperty({ required: false })
  deleted?: boolean;
}
