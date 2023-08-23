import { Module } from '@nestjs/common';
import { AchievementService } from './achievement.service';
import { AchievementController } from './achievement.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthorInterceptor } from '../../interceptors';

@Module({
  controllers: [AchievementController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: AuthorInterceptor,
    },
    AchievementService,
  ],
})
export class AchievementModule {}
