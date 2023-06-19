import { Injectable } from '@nestjs/common';
import { Chapter, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class ChapterService {
  constructor(private prisma: PrismaService) {}

  /**
   * Create a new chapter.
   *
   * @param {Prisma.ChapterCreateInput} data - The data for creating the chapter.
   * @returns {Promise<Chapter>} - The created chapter.
   */
  async create(data: Prisma.ChapterCreateInput): Promise<Chapter> {
    try {
      const chapter = await this.prisma.chapter.create({ data });

      return chapter;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Chapter DTO validation error:', error.message);
        throw new Error(
          'Chapter DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while creating the chapter.');
      }
    }
  }

  /**
   * Retrieve all chapters.
   *
   * @returns {Promise<Chapter[]>} - An array of chapters.
   */
  async findAll(): Promise<Chapter[]> {
    try {
      return await this.prisma.chapter.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      console.error('Error while retrieving chapters:', error);
      throw new Error('Failed to retrieve chapters.');
    }
  }

  /**
   * Retrieve a specific chapter by ID.
   *
   * @param {string} id - The ID of the chapter to retrieve.
   * @returns {Promise<Chapter>} - The chapter with the specified ID.
   */
  async findOne(id: string): Promise<Chapter> {
    try {
      return await this.prisma.chapter.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Chapter ID validation error:', error.message);
        throw new Error(
          'Chapter DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while retrieving the chapter.');
      }
    }
  }

  /**
   * Update a chapter with new data.
   *
   * @param {string} id - The ID of the chapter to update.
   * @param {Prisma.ChapterUpdateInput} data - The data for updating the chapter.
   * @returns {Promise<Chapter>} - The updated chapter.
   */
  async update(id: string, data: Prisma.ChapterUpdateInput): Promise<Chapter> {
    try {
      return await this.prisma.chapter.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Chapter DTO validation error:', error.message);
        throw new Error(
          'Chapter DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while updating the chapter.');
      }
    }
  }

  /**
   * Remove a chapter by ID.
   *
   * @param {string} id - The ID of the chapter to remove.
   * @returns {Promise<Chapter>} - The removed chapter.
   */
  async remove(id: string): Promise<Chapter> {
    try {
      return await this.prisma.chapter.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Chapter ID validation error:', error.message);
        throw new Error(
          'Chapter DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while deleting the chapter.');
      }
    }
  }
}
