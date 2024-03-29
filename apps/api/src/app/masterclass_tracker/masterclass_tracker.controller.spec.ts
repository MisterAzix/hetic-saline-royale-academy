import { Test, TestingModule } from '@nestjs/testing';
import { MasterclassTrackerController } from './masterclass_tracker.controller';
import { MasterclassTrackerService } from './masterclass_tracker.service';
import { PrismaService } from '../../prisma.service';

describe('MasterclassTrackerController', () => {
  let controller: MasterclassTrackerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MasterclassTrackerController],
      providers: [MasterclassTrackerService, PrismaService],
    }).compile();

    controller = module.get<MasterclassTrackerController>(
      MasterclassTrackerController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
