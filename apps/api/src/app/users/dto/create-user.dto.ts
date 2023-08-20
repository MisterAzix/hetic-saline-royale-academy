import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class UserCreateDto implements Prisma.UserCreateInput {
  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  last_name: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}
