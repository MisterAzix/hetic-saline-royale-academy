import { Injectable } from '@nestjs/common';
import { Category, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  /**
   * Create a new category.
   *
   * @param {Prisma.CategoryCreateInput} data - The data for creating the category.
   * @returns {Promise<Category>} - The created category.
   */
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
        throw new Error('An error occurred while creating the category.');
      }
    }
  }

  /**
   * Retrieve all categories.
   *
   * @returns {Promise<Category[]>} - An array of categories.
   */
  async findAll(): Promise<Category[]> {
    try {
      return await this.prisma.category.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      console.error('Error while retrieving categories:', error);
      throw new Error('Failed to retrieve categories.');
    }
  }

  /**
   * Retrieve a specific category by ID.
   *
   * @param {string} id - The ID of the category to retrieve.
   * @returns {Promise<Category>} - The category with the specified ID.
   */
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
        throw new Error('An error occurred while retrieving the category.');
      }
    }
  }

  /**
   * Update a category with new data.
   *
   * @param {string} id - The ID of the category to update.
   * @param {Prisma.CategoryUpdateInput} data - The data for updating the category.
   * @returns {Promise<Category>} - The updated category.
   */
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
        throw new Error('An error occurred while updating the category.');
      }
    }
  }

  /**
   * Remove a category by ID.
   *
   * @param {string} id - The ID of the category to remove.
   * @returns {Promise<Category>} - The removed category.
   */
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
        throw new Error('An error occurred while deleting the category.');
      }
    }
  }
}
