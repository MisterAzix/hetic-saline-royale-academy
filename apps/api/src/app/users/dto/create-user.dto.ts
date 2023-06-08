import { IsEmail, IsNotEmpty, IsString, Min } from 'class-validator';
import { HasUppercaseLetter } from '../../decorators/has-uppercase-letter.decorator';
import { HasNumber } from '../../decorators/has-number.decorator';
import { HasLowercase } from '../../decorators/has-lowercase-letter.decorator';
import { HasSpecialCharacter } from '../../decorators/has-special-character.decorator';

// Valider les données entrantes des endpoints
export class UserCreateDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Min(8)
  @HasUppercaseLetter()
  @HasLowercase()
  @HasNumber()
  @HasSpecialCharacter()
  password: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;
}
