import { Module } from '@nestjs/common';
import { MasterclassTrackerService } from './masterclass_tracker.service';
import { MasterclassTrackerController } from './masterclass_tracker.controller';

@Module({
  controllers: [MasterclassTrackerController],
  providers: [MasterclassTrackerService],
})
export class MasterclassTrackerModule {}
