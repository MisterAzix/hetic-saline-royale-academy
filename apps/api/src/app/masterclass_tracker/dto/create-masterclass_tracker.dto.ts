import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMasterclassTrackerDto {
  @ApiProperty({ type: String, required: false })
  @IsString()
  user_id: string;

  @ApiProperty({ type: Number, required: false })
  @IsNumber()
  progression?: number;

  @ApiProperty({ type: String, required: false })
  @IsString()
  @IsOptional()
  masterclass_id?: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  @IsBoolean()
  is_deleted?: boolean;
}
