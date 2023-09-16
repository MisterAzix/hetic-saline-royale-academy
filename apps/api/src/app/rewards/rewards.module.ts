import { Module } from '@nestjs/common';
import { AuthorInterceptorModule } from '../../interceptors/author.interceptor.module';
import { RewardsController } from './rewards.controller';
import { RewardsService } from './rewards.service';

@Module({
  controllers: [RewardsController],
  providers: [RewardsService],
  imports: [AuthorInterceptorModule],
})
export class RewardsModule {}
