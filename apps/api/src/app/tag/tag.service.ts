import { Injectable } from '@nestjs/common';
import { Prisma, Tag } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TagCreateInput): Promise<Tag> {
    try {
      const tag = await this.prisma.tag.create({ data });

      return tag;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Tag DTO validation error:', error.message);
        throw new Error('Tag DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        throw new Error('An error occurred while creating the tag.');
      }
    }
  }

  async findAll(): Promise<Tag[]> {
    try {
      return await this.prisma.tag.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      console.error('Error while retrieving tags:', error);
      throw new Error('Failed to retrieve tags.');
    }
  }

  async findOne(id: string): Promise<Tag> {
    try {
      return await this.prisma.tag.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Tag ID validation error:', error.message);
        throw new Error('Tag DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        throw new Error('An error occurred while retrieving tag.');
      }
    }
  }

  async update(id: string, data: Prisma.AchievementUpdateInput): Promise<Tag> {
    try {
      return await this.prisma.tag.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Tag DTO validation error:', error.message);
        throw new Error('Tag DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        throw new Error('An error occurred while updating the tag.');
      }
    }
  }

  async remove(id: string): Promise<Tag> {
    try {
      return await this.prisma.tag.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Tag ID validation error:', error.message);
        throw new Error('Tag DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        throw new Error('An error occurred while deleting tag.');
      }
    }
  }
}
