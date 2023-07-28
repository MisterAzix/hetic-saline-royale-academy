import { Test, TestingModule } from '@nestjs/testing';
import { ProgressTrackerController } from './progress_tracker.controller';
import { ProgressTrackerService } from './progress_tracker.service';
import { PrismaService } from '../../prisma.service';

describe('ProgressTrackerController', () => {
  let controller: ProgressTrackerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgressTrackerController],
      providers: [ProgressTrackerService, PrismaService],
    }).compile();

    controller = module.get<ProgressTrackerController>(
      ProgressTrackerController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
