import { Test, TestingModule } from '@nestjs/testing';
import { MasterclassController } from './lesson.controller';
import { MasterclassService } from './lesson.service';
import { PrismaService } from '../../prisma.service';

describe('MasterclassController', () => {
  let controller: MasterclassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MasterclassController],
      providers: [MasterclassService, PrismaService],
    }).compile();

    controller = module.get<MasterclassController>(MasterclassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
