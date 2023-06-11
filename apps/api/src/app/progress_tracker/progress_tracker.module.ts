import { Module } from '@nestjs/common';
import { ProgressTrackerService } from './progress_tracker.service';
import { ProgressTrackerController } from './progress_tracker.controller';

@Module({
  controllers: [ProgressTrackerController],
  providers: [ProgressTrackerService]
})
export class ProgressTrackerModule {}
