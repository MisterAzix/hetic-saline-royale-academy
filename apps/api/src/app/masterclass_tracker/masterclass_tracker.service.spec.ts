import { Test, TestingModule } from '@nestjs/testing';
import { MasterclassTrackerService } from './masterclass_tracker.service';
import { PrismaService } from '../../prisma.service';

describe('MasterclassTrackerService', () => {
  let service: MasterclassTrackerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MasterclassTrackerService, PrismaService],
    }).compile();

    service = module.get<MasterclassTrackerService>(MasterclassTrackerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
