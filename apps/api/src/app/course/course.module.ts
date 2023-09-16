import { Module } from '@nestjs/common';
import { AuthorInterceptorModule } from '../../interceptors/author.interceptor.module';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';

@Module({
  controllers: [CourseController],
  providers: [CourseService],
  imports: [AuthorInterceptorModule],
})
export class CourseModule {}
