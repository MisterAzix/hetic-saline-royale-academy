import { Test, TestingModule } from '@nestjs/testing';
import { GamificationController } from './gamification.controller';
import { GamificationService } from './gamification.service';
import { PrismaService } from '../../prisma.service';

describe('GamificationController', () => {
  let controller: GamificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GamificationController],
      providers: [GamificationService, PrismaService],
    }).compile();

    controller = module.get<GamificationController>(GamificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
