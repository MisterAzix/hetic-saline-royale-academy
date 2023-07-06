import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, IsUrl, Length } from 'class-validator';

export class CreateVideoDto {
  @ApiProperty({ type: String, required: false })
  @IsString()
  @Length(10, 700)
  description?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  @IsUrl()
  url: string;

  @ApiProperty({ type: Number, required: false })
  @IsNumber()
  height?: number;

  @ApiProperty({ type: Number, required: false })
  @IsNumber()
  width?: number;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  @IsString()
  lessonId?: string;
}
