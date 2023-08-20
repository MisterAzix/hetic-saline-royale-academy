import { Test, TestingModule } from '@nestjs/testing';
import { MasterclassController } from './masterclass.controller';
import { MasterclassService } from './masterclass.service';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { PrismaModule } from '../prisma.module';

describe('MasterclassController', () => {
  let controller: MasterclassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule, CloudinaryModule],
      controllers: [MasterclassController],
      providers: [MasterclassService],
    }).compile();

    controller = module.get<MasterclassController>(MasterclassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
