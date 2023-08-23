import { Module } from '@nestjs/common';
import { RewardsService } from './rewards.service';
import { RewardsController } from './rewards.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthorInterceptor } from '../../interceptors';

@Module({
  controllers: [RewardsController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: AuthorInterceptor,
    },
    RewardsService,
  ],
})
export class RewardsModule {}
