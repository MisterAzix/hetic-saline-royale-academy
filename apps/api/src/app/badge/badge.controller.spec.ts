import { Test, TestingModule } from '@nestjs/testing';
import { BadgeController } from './badge.controller';
import { BadgeService } from './badge.service';
import { PrismaService } from '../../prisma.service';

describe('BadgeController', () => {
  let controller: BadgeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BadgeController],
      providers: [BadgeService, PrismaService],
    }).compile();

    controller = module.get<BadgeController>(BadgeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
