import { PartialType } from '@nestjs/mapped-types';
import { CreateProgressTrackerDto } from './create-progress_tracker.dto';

export class UpdateProgressTrackerDto extends PartialType(CreateProgressTrackerDto) {}
