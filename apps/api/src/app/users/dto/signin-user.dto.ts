import { IsNotEmpty, IsString } from 'class-validator';

// Class validator permet de valider les données entrantes des endpoints
export class UserSignDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
