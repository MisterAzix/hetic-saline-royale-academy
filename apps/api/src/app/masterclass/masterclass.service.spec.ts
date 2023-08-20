import { Test, TestingModule } from '@nestjs/testing';
import { MasterclassService } from './masterclass.service';
import { PrismaModule } from '../prisma.module';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

describe('MasterclassService', () => {
  let service: MasterclassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule, CloudinaryModule],
      providers: [MasterclassService],
    }).compile();

    service = module.get<MasterclassService>(MasterclassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
