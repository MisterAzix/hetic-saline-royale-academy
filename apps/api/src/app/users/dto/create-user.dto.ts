import { ApiProperty } from '@nestjs/swagger';

export class UserCreateDto {
  @ApiProperty({ required: false })
  id?: string;

  @ApiProperty({ required: false })
  displayName?: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ required: false })
  createdAt?: Date;

  @ApiProperty({ required: false })
  lastUpdatedAt?: Date;

  @ApiProperty({ required: false })
  deleted?: boolean;

  @ApiProperty({ required: false, default: 'USER' })
  role?: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ required: false })
  preferences?: string;

  @ApiProperty({ required: false })
  ecole?: string;

  @ApiProperty({ required: false })
  gamificationId?: string;

  @ApiProperty({ required: false })
  notificationId?: string;

  @ApiProperty({ required: false })
  subscriptionId?: string;

  @ApiProperty({ required: false })
  progressTrackerId?: string;

  @ApiProperty({ required: false })
  courseId?: string;

  @ApiProperty({ required: false })
  imageId?: string;
}
