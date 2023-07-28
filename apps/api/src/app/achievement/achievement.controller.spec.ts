import { Test, TestingModule } from '@nestjs/testing';
import { AchievementController } from './achievement.controller';
import { AchievementService } from './achievement.service';
import { PrismaService } from '../../prisma.service';

describe('AchievementController', () => {
  let controller: AchievementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AchievementController],
      providers: [AchievementService, PrismaService],
    }).compile();

    controller = module.get<AchievementController>(AchievementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
