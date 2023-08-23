import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthorInterceptor } from '../../interceptors';

@Module({
  controllers: [CourseController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: AuthorInterceptor,
    },
    CourseService,
  ],
})
export class CourseModule {}
