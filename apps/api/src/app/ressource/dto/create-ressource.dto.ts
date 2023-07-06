import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, IsUrl, Length } from 'class-validator';

export class CreateRessourceDto {
  @ApiProperty({ type: String })
  @IsString()
  @Length(2, 100)
  title: string;

  @ApiProperty({ type: String, required: false })
  @IsUrl()
  path?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  type?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  accessLevel?: string;

  @ApiProperty({ type: Number, required: false })
  @IsNumber()
  duration?: number;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  @IsString()
  courseId?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  gamificationId?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  bagdeId?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  lessonId?: string;
}
