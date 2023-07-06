import { Test, TestingModule } from '@nestjs/testing';
import { ProgressTrackerService } from './progress_tracker.service';

describe('ProgressTrackerService', () => {
  let service: ProgressTrackerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgressTrackerService],
    }).compile();

    service = module.get<ProgressTrackerService>(ProgressTrackerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
