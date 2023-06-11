import { Injectable } from '@nestjs/common';
import { Lesson, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class LessonService {
  constructor(private prisma: PrismaService) {}

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
