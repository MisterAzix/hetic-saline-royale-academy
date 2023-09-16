import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterclassTrackerDto } from './create-masterclass_tracker.dto';

export class UpdateMasterclassTrackerDto extends PartialType(
  CreateMasterclassTrackerDto
) {}
