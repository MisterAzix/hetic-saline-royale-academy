import { Injectable } from '@nestjs/common';
import { Course, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CourseCreateInput): Promise<Course> {
    try {
      const course = await this.prisma.course.create({ data });

      return course;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Course DTO validation error:', error.message);
        throw new Error(
          'Course DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while creating the course.');
      }
    }
  }

  async findAll(): Promise<Course[]> {
    try {
      return await this.prisma.course.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      console.error('Error while retrieving courses:', error);
      throw new Error('Failed to retrieve courses.');
    }
  }

  async findOne(id: string): Promise<Course> {
    try {
      return await this.prisma.course.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Course ID validation error:', error.message);
        throw new Error(
          'Course DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while retrieving course.');
      }
    }
  }

  async update(id: string, data: Prisma.CourseUpdateInput): Promise<Course> {
    try {
      return await this.prisma.course.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Course DTO validation error:', error.message);
        throw new Error(
          'Course DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while updating the course.');
      }
    }
  }

  async remove(id: string): Promise<Course> {
    try {
      return await this.prisma.course.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Course ID validation error:', error.message);
        throw new Error(
          'Course DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while deleting Course.');
      }
    }
  }
}
