import { PartialType } from '@nestjs/mapped-types';
import { CreateGamificationDto } from './create-gamification.dto';

export class UpdateGamificationDto extends PartialType(CreateGamificationDto) {}
