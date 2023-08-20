import { Test, TestingModule } from '@nestjs/testing';
import { MasterclassService } from './lesson.service';
import { PrismaService } from '../../prisma.service';

describe('MasterclassService', () => {
  let service: MasterclassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MasterclassService, PrismaService],
    }).compile();

    service = module.get<MasterclassService>(MasterclassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
