import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Lesson, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class LessonService {
  private logger = new Logger(LessonService.name);

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
        this.logger.error('Lesson DTO validation error:', error.message);
        throw new BadRequestException(`Lesson DTO validation error: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while creating the lesson:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while creating the lesson: ${error}`
        );
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
      this.logger.error('Error while retrieving lessons:', error);
      throw new InternalServerErrorException(
        `Failed to retrieve lessons: ${error}`
      );
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
        this.logger.error('Lesson ID validation error:', error.message);
        throw new BadRequestException(`Lesson DTO validation error: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while retrieving lesson:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while retrieving lesson: ${error}`
        );
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
        this.logger.error('Lesson DTO validation error:', error.message);
        throw new BadRequestException(`Lesson DTO validation error: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while updating the lesson:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while updating the lesson: ${error}`
        );
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
        this.logger.error('Lesson ID validation error:', error.message);
        throw new BadRequestException(`Lesson DTO validation error: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while deleting lesson:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while deleting lesson: ${error}`
        );
      }
    }
  }
}
