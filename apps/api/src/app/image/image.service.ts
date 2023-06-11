import { Injectable } from '@nestjs/common';
import { Image, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class ImageService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ImageCreateInput): Promise<Image> {
    try {
      const image = await this.prisma.image.create({ data });

      return image;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Image DTO validation error:', error.message);
        throw new Error('Image DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        throw new Error('An error occurred while creating the image.');
      }
    }
  }

  async findAll(): Promise<Image[]> {
    try {
      return await this.prisma.image.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      console.error('Error while retrieving images:', error);
      throw new Error('Failed to retrieve images.');
    }
  }

  async findOne(id: string): Promise<Image> {
    try {
      return await this.prisma.image.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Image ID validation error:', error.message);
        throw new Error('Image DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        throw new Error('An error occurred while retrieving images.');
      }
    }
  }

  async update(
    id: string,
    data: Prisma.AchievementUpdateInput
  ): Promise<Image> {
    try {
      return await this.prisma.image.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Image DTO validation error:', error.message);
        throw new Error('Image DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        throw new Error('An error occurred while updating the image.');
      }
    }
  }

  async remove(id: string): Promise<Image> {
    try {
      return await this.prisma.image.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Image ID validation error:', error.message);
        throw new Error('Image DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        throw new Error('An error occurred while deleting image.');
      }
    }
  }
}
