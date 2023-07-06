import { Test, TestingModule } from '@nestjs/testing';
import { ProgressTrackerController } from './progress_tracker.controller';
import { ProgressTrackerService } from './progress_tracker.service';

describe('ProgressTrackerController', () => {
  let controller: ProgressTrackerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgressTrackerController],
      providers: [ProgressTrackerService],
    }).compile();

    controller = module.get<ProgressTrackerController>(ProgressTrackerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
