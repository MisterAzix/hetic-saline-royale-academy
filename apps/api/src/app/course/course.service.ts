import { Injectable, Logger } from '@nestjs/common';
import { Course, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class CourseService {
  private logger = new Logger(CourseService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Create a new course.
   *
   * @param {Prisma.CourseCreateInput} data - The data for creating the course.
   * @returns {Promise<Course>} - The created course.
   * @throws {Error} - If an error occurs while creating the course.
   */
  async create(data: Prisma.CourseCreateInput): Promise<Course> {
    try {
      const course = await this.prisma.course.create({ data });
      return course;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Course DTO validation error:', error.message);
        throw new Error(
          'Course DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while creating the course:',
          error.message
        );
        throw new Error('An error occurred while creating the course.');
      }
    }
  }

  /**
   * Retrieve all courses.
   *
   * @returns {Promise<Course[]>} - An array of courses.
   * @throws {Error} - If an error occurs while retrieving the courses.
   */
  async findAll(): Promise<Course[]> {
    try {
      return await this.prisma.course.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      this.logger.error('Error while retrieving courses:', error);
      throw new Error('Failed to retrieve courses.');
    }
  }

  /**
   * Retrieve a specific course by ID.
   *
   * @param {string} id - The ID of the course to retrieve.
   * @returns {Promise<Course>} - The course with the specified ID.
   * @throws {Error} - If an error occurs while retrieving the course.
   */
  async findOne(id: string): Promise<Course> {
    try {
      return await this.prisma.course.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Course ID validation error:', error.message);
        throw new Error(
          'Course DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while retrieving the course:',
          error.message
        );
        throw new Error('An error occurred while retrieving the course.');
      }
    }
  }

  /**
   * Update a course with new data.
   *
   * @param {string} id - The ID of the course to update.
   * @param {Prisma.CourseUpdateInput} data - The data for updating the course.
   * @returns {Promise<Course>} - The updated course.
   * @throws {Error} - If an error occurs while updating the course.
   */
  async update(id: string, data: Prisma.CourseUpdateInput): Promise<Course> {
    try {
      return await this.prisma.course.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Course DTO validation error:', error.message);
        throw new Error(
          'Course DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while updating the course:',
          error.message
        );
        throw new Error('An error occurred while updating the course.');
      }
    }
  }

  /**
   * Remove a course by ID.
   *
   * @param {string} id - The ID of the course to remove.
   * @returns {Promise<Course>} - The removed course.
   * @throws {Error} - If an error occurs while deleting the course.
   */
  async remove(id: string): Promise<Course> {
    try {
      return await this.prisma.course.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Course ID validation error:', error.message);
        throw new Error(
          'Course DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while deleting the course:',
          error.message
        );
        throw new Error('An error occurred while deleting the course.');
      }
    }
  }
}
