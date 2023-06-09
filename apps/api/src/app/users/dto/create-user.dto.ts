import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Min } from 'class-validator';
import { HasLowercase } from '../../decorators/has-lowercase-letter.decorator';
import { HasNumber } from '../../decorators/has-number.decorator';
import { HasSpecialCharacter } from '../../decorators/has-special-character.decorator';
import { HasUppercaseLetter } from '../../decorators/has-uppercase-letter.decorator';

// Valider les données entrantes des endpoints
export class UserCreateDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Min(8)
  @HasUppercaseLetter()
  @HasLowercase()
  @HasNumber()
  @HasSpecialCharacter()
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;
}
