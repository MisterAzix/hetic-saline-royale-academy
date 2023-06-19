import { Injectable } from '@nestjs/common';
import { Lesson, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class LessonService {
  constructor(private prisma: PrismaService) {}

  /**
   * Create a new lesson.
   *
   * @param {Prisma.LessonCreateInput} data - The data for creating the lesson.
   * @returns {Promise<Lesson>} - The created lesson.
   */
  async create(data: Prisma.LessonCreateInput): Promise<Lesson> {
    try {
      const lesson = await this.prisma.lesson.create({ data });
      return lesson;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Lesson DTO validation error:', error.message);
        throw new Error(
          'Lesson DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while creating the lesson.');
      }
    }
  }

  /**
   * Retrieve all lessons.
   *
   * @returns {Promise<Lesson[]>} - An array of lessons.
   */
  async findAll(): Promise<Lesson[]> {
    try {
      return await this.prisma.lesson.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      console.error('Error while retrieving lessons:', error);
      throw new Error('Failed to retrieve lessons.');
    }
  }

  /**
   * Retrieve a specific lesson by ID.
   *
   * @param {string} id - The ID of the lesson to retrieve.
   * @returns {Promise<Lesson>} - The lesson with the specified ID.
   */
  async findOne(id: string): Promise<Lesson> {
    try {
      return await this.prisma.lesson.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Lesson ID validation error:', error.message);
        throw new Error(
          'Lesson DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while retrieving lesson.');
      }
    }
  }

  /**
   * Update a lesson with new data.
   *
   * @param {string} id - The ID of the lesson to update.
   * @param {Prisma.LessonUpdateInput} data - The data for updating the lesson.
   * @returns {Promise<Lesson>} - The updated lesson.
   */
  async update(id: string, data: Prisma.LessonUpdateInput): Promise<Lesson> {
    try {
      return await this.prisma.lesson.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Lesson DTO validation error:', error.message);
        throw new Error(
          'Lesson DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while updating the lesson.');
      }
    }
  }

  /**
   * Remove a lesson by ID.
   *
   * @param {string} id - The ID of the lesson to remove.
   * @returns {Promise<Lesson>} - The removed lesson.
   */
  async remove(id: string): Promise<Lesson> {
    try {
      return await this.prisma.lesson.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Lesson ID validation error:', error.message);
        throw new Error(
          'Lesson DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while deleting lesson.');
      }
    }
  }
}
