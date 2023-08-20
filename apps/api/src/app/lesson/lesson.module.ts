import { Module } from '@nestjs/common';
import { MasterclassService } from './lesson.service';
import { MasterclassController } from './lesson.controller';

@Module({
  controllers: [MasterclassController],
  providers: [MasterclassService],
})
export class MasterclassModule {}
