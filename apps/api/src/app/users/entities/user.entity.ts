import { ApiProperty } from '@nestjs/swagger';
import { Role, User } from '@prisma/client';

export class UsersEntity implements User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  display_name: string;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  email: string;

  password: string;

  @ApiProperty()
  is_deleted: boolean;

  @ApiProperty()
  role: Role;

  @ApiProperty()
  preferences: string;

  @ApiProperty()
  ecole: string;

  @ApiProperty()
  picture_url: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}
