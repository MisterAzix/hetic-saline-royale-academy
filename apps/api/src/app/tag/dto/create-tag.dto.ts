import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateTagDto {
  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  @IsString()
  courseId?: string;

  @ApiProperty({ type: String, required: false })
  @IsString()
  lessonId?: string;
}
