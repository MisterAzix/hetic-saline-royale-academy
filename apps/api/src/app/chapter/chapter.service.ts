import { Injectable } from '@nestjs/common';
import { Chapter, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class ChapterService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ChapterCreateInput): Promise<Chapter> {
    try {
      const chapter = await this.prisma.chapter.create({ data });

      return chapter;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('chapter DTO validation error:', error.message);
        throw new Error(
          'Chapter DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while creating the chapter.');
      }
    }
  }

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
        throw new Error('An error occurred while retrieving chapter.');
      }
    }
  }

  async update(id: string, data: Prisma.BadgeUpdateInput): Promise<Chapter> {
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
        throw new Error('An error occurred while deleting chapter.');
      }
    }
  }
}
