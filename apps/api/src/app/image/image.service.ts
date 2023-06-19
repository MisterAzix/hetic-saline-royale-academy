import { Injectable } from '@nestjs/common';
import { Image, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class ImageService {
  constructor(private prisma: PrismaService) {}

  /**
   * Create a new image.
   *
   * @param {Prisma.ImageCreateInput} data - The data for creating the image.
   * @returns {Promise<Image>} - The created image.
   */
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

  /**
   * Retrieve all images.
   *
   * @returns {Promise<Image[]>} - An array of images.
   */
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

  /**
   * Retrieve a specific image by ID.
   *
   * @param {string} id - The ID of the image to retrieve.
   * @returns {Promise<Image>} - The image with the specified ID.
   */
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

  /**
   * Update an image with new data.
   *
   * @param {string} id - The ID of the image to update.
   * @param {Prisma.AchievementUpdateInput} data - The data for updating the image.
   * @returns {Promise<Image>} - The updated image.
   */
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

  /**
   * Remove an image by ID.
   *
   * @param {string} id - The ID of the image to remove.
   * @returns {Promise<Image>} - The removed image.
   */
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
        throw new Error('An error occurred while deleting the image.');
      }
    }
  }
}
