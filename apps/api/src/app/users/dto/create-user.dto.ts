import { ApiProperty } from '@nestjs/swagger';
import { Prisma, Role } from '@prisma/client';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsObject,
  IsString,
} from 'class-validator';

export class UserCreateDto {
  @ApiProperty({ type: String, required: false })
  @IsString()
  displayName?: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ type: String, required: false })
  @IsEmail()
  email: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  deleted?: boolean;

  @ApiProperty({ required: false, default: 'USER' })
  role?: Role;

  @ApiProperty({ type: String, required: false })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  preferences?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  ecole?: string;

  @ApiProperty({ type: Object, required: false })
  @IsObject()
  image?: object;

  @ApiProperty({ type: Object, required: false })
  @IsObject()
  gamefication?: object;

  @ApiProperty({ type: Object, required: false })
  @IsObject()
  notification?: object;

  @ApiProperty({ type: Object, required: false })
  @IsObject()
  subscription?: object;

  @ApiProperty({ type: Array, required: false })
  @IsArray()
  courses?: Prisma.UserCreateInput['courses'];
}
