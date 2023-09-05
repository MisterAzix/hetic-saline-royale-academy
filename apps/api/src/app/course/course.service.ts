import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Course, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class CourseService {
  private logger = new Logger(CourseService.name);

  constructor(private prisma: PrismaService) {}

  private includeCommonRelationships() {
    return {
      category: true,
      chapters: { include: { masterclasses: true } },
      tags: true,
    };
  }

  /**
   * Create a new course.
   *
   * @param {Prisma.CourseCreateInput} data - The data for creating the course.
   * @returns {Promise<Course>} - The created course.
   * @throws {Error} - If an error occurs while creating the course.
   */
  async create(data: Prisma.CourseCreateInput): Promise<Course> {
    try {
      const course = await this.prisma.course.create({
        data,
        include: this.includeCommonRelationships(),
      });
      return course;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Course DTO validation error:', error.message);
        throw new BadRequestException(`Course DTO validation error: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while creating the course:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while creating the course : ${error}`
        );
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
        where: { is_deleted: false },
        include: this.includeCommonRelationships(),
      });
    } catch (error) {
      this.logger.error('Error while retrieving courses:', error);
      throw new InternalServerErrorException(
        `Failed to retrieve courses : ${error}`
      );
    }
  }

  /**
   * Retrieve all courses subscribed by a user.
   * @param {string} id - The ID of the user whose courses are to be retrieved.
   * @throws {Error} - If an error occurs while retrieving the courses.
   * @returns {Promise<Course[]>} - An array of courses.
   */
  async findAllSubscribed(user_id: string): Promise<Course[]> {
    try {
      return await this.prisma.course.findMany({
        where: { user_id },
        include: this.includeCommonRelationships(),
      });
    } catch (error) {
      this.logger.error("Error while retrieving  user's courses:", error);
      throw new InternalServerErrorException(
        `Failed to retrieve  user's courses : ${error}`
      );
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
      return await this.prisma.course.findUnique({
        where: { id },
        include: this.includeCommonRelationships(),
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Course ID validation error:', error.message);
        throw new BadRequestException(`Course DTO validation error: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while retrieving the course:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while retrieving the course : ${error}`
        );
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
        include: this.includeCommonRelationships(),
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Course DTO validation error:', error.message);
        throw new BadRequestException(`Course DTO validation error: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while updating the course:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while updating the course : ${error}`
        );
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
        throw new BadRequestException(`Course DTO validation error: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while deleting the course:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while deleting the course : ${error}`
        );
      }
    }
  }
}
