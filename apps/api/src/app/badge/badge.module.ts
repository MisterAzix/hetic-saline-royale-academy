import { Module } from '@nestjs/common';
import { AuthorInterceptorModule } from '../../interceptors/author.interceptor.module';
import { BadgeController } from './badge.controller';
import { BadgeService } from './badge.service';


@Module({
  controllers: [BadgeController],
  providers: [BadgeService],
  imports: [AuthorInterceptorModule],
})
export class BadgeModule {}
