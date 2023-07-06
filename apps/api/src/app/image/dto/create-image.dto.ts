import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, IsUrl, Length } from 'class-validator';

export class CreateImageDto {
  @ApiProperty({ type: String })
  @IsString()
  @Length(10, 700)
  description: string;

  @ApiProperty({ type: Number, required: false })
  @IsNumber()
  height?: number;

  @ApiProperty({ type: Number, required: false })
  @IsNumber()
  width?: number;

  @ApiProperty({ type: String })
  @IsUrl()
  @ApiProperty()
  url: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  @IsString()
  lessonId?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  userId?: string;
}
