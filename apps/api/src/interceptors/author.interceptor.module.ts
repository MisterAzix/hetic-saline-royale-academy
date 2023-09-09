import { Module } from '@nestjs/common';
import { AuthorInterceptor } from './author.interceptor';

@Module({
  providers: [AuthorInterceptor],
  exports: [AuthorInterceptor],
})
export class AuthorInterceptorModule {}
