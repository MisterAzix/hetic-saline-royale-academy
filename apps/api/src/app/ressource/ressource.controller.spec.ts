import { Test, TestingModule } from '@nestjs/testing';
import { RessourceController } from './ressource.controller';
import { RessourceService } from './ressource.service';
import { PrismaService } from '../../prisma.service';

describe('RessourceController', () => {
  let controller: RessourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RessourceController],
      providers: [RessourceService, PrismaService],
    }).compile();

    controller = module.get<RessourceController>(RessourceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
