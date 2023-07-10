import { ApiProperty } from '@nestjs/swagger';
import { Role, User } from '@prisma/client';

export class UsersEntity implements User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  displayName: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  lastUpdatedAt: Date;

  @ApiProperty()
  deleted: boolean;

  @ApiProperty()
  role: Role;

  @ApiProperty()
  password: string;

  @ApiProperty()
  preferences: string;

  @ApiProperty()
  ecole: string;
}
