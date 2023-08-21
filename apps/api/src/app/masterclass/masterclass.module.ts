import { Module } from '@nestjs/common';
import { MasterclassService } from './masterclass.service';
import { MasterclassController } from './masterclass.controller';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
  imports: [CloudinaryModule],
  controllers: [MasterclassController],
  providers: [MasterclassService],
})
export class MasterclassModule {}
