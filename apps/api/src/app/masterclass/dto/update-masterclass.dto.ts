import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterclassDto } from './create-masterclass.dto';

export class UpdateMasterclassDto extends PartialType(CreateMasterclassDto) {}
