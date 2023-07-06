import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Image, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class ImageService {
  private logger = new Logger(ImageService.name);

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
        this.logger.error('Image DTO validation error:', error.message);
        throw new BadRequestException(`Image DTO validation error: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while creating the image:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while creating the image: ${error}`
        );
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
      this.logger.error('Error while retrieving images:', error);
      throw new InternalServerErrorException(
        `Failed to retrieve images: ${error}`
      );
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
        this.logger.error('Image ID validation error:', error.message);
        throw new BadRequestException(`Image DTO validation error: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while retrieving images:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while retrieving images: ${error}`
        );
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
        this.logger.error('Image DTO validation error:', error.message);
        throw new BadRequestException(`Image DTO validation error: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while updating the image:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while updating the image: ${error}`
        );
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
        this.logger.error('Image ID validation error:', error.message);
        throw new BadRequestException(`Image DTO validation error: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while deleting the image:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while deleting the image: ${error}`
        );
      }
    }
  }
}
