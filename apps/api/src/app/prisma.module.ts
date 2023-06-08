import { Global, Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Global()
@Module({
  //Config Prisma client Service globally
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
