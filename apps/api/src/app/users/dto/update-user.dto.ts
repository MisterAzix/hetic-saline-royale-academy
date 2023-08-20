import { Prisma, Role } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsEnum,
  IsObject,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class UpdateUserDto implements Prisma.UserUpdateInput {
  @ApiProperty({ type: String, required: false })
  @IsString()
  @IsOptional()
  display_name?: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsOptional()
  first_name?: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsOptional()
  last_name?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  @IsOptional()
  is_deleted?: boolean;

  @ApiProperty({ required: false, default: 'USER' })
  @IsEnum(Role)
  @IsOptional()
  role?: Role;

  @ApiProperty({ type: String, required: false })
  @IsString()
  @IsStrongPassword()
  @IsOptional()
  password?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  @IsOptional()
  preferences?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  @IsOptional()
  ecole?: string;

  @ApiProperty({ type: Object, required: false })
  @IsObject()
  @IsOptional()
  image?: object;

  @ApiProperty({ type: Object, required: false })
  @IsObject()
  @IsOptional()
  gamefication?: object;

  @ApiProperty({ type: Object, required: false })
  @IsObject()
  @IsOptional()
  notification?: object;

  @ApiProperty({ type: Object, required: false })
  @IsObject()
  @IsOptional()
  subscription?: object;

  @ApiProperty({ type: Array, required: false })
  @IsArray()
  @IsOptional()
  courses?: Prisma.UserCreateInput['courses'];
}
