import { Module } from '@nestjs/common';
import { BadgeService } from './badge.service';
import { BadgeController } from './badge.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthorInterceptor } from '../../interceptors';

@Module({
  controllers: [BadgeController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: AuthorInterceptor,
    },
    BadgeService,
  ],
})
export class BadgeModule {}
