import { ApiProperty } from '@nestjs/swagger';

export class CreateTagDto {
  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  is_deleted?: boolean;

  @ApiProperty({ type: String, required: false })
  course_id?: string;

  @ApiProperty({ type: String, required: false })
  masterclass_id?: string;
}
