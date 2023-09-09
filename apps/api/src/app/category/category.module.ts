import { Module } from '@nestjs/common';
import { AuthorInterceptorModule } from '../../interceptors/author.interceptor.module';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports: [AuthorInterceptorModule],
})
export class CategoryModule {}
