import { Module } from '@nestjs/common';
import { AuthorInterceptorModule } from '../../interceptors/author.interceptor.module';
import { AchievementController } from './achievement.controller';
import { AchievementService } from './achievement.service';

@Module({
  controllers: [AchievementController],
  providers: [AchievementService],
  imports: [AuthorInterceptorModule],
})
export class AchievementModule {}
