import { Injectable } from '@nestjs/common';
import { Category, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CategoryCreateInput): Promise<Category> {
    try {
      const category = await this.prisma.category.create({ data });

      return category;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Category DTO validation error:', error.message);
        throw new Error(
          'Category DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while creating the Category.');
      }
    }
  }

  async findAll(): Promise<Category[]> {
    try {
      return await this.prisma.category.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      console.error('Error while retrieving categoris:', error);
      throw new Error('Failed to retrieve categoris.');
    }
  }

  async findOne(id: string): Promise<Category> {
    try {
      return await this.prisma.category.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Category ID validation error:', error.message);
        throw new Error(
          'Category DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while retrieving Category.');
      }
    }
  }

  async update(
    id: string,
    data: Prisma.CategoryUpdateInput
  ): Promise<Category> {
    try {
      return await this.prisma.category.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Category DTO validation error:', error.message);
        throw new Error(
          'Category DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while updating the Category.');
      }
    }
  }

  async remove(id: string): Promise<Category> {
    try {
      return await this.prisma.category.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Category ID validation error:', error.message);
        throw new Error(
          'Category DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while deleting category.');
      }
    }
  }
}
