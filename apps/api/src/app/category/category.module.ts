import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthorInterceptor } from '../../interceptors';

@Module({
  controllers: [CategoryController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: AuthorInterceptor,
    },
    CategoryService,
  ],
})
export class CategoryModule {}
