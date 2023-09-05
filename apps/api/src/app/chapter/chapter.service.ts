import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Chapter, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class ChapterService {
  private logger = new Logger(ChapterService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Create a new chapter.
   *
   * @param {Prisma.ChapterCreateInput} data - The data for creating the chapter.
   * @returns {Promise<Chapter>} - The created chapter.
   * @throws {Error} - If an error occurs while creating the chapter.
   */
  async create(data: Prisma.ChapterCreateInput): Promise<Chapter> {
    try {
      const chapter = await this.prisma.chapter.create({
        data,
        include: { masterclasses: true },
      });

      return chapter;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Chapter DTO validation error:', error.message);
        throw new BadRequestException(`Invalid chapter data: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while creating the chapter',
          error.message
        );
        throw new InternalServerErrorException(
          `Failed to create the chapter: ${error}`
        );
      }
    }
  }

  /**
   * Retrieve all chapters.
   *
   * @returns {Promise<Chapter[]>} - An array of chapters.
   * @throws {Error} - If an error occurs while retrieving chapters.
   */
  async findAll(): Promise<Chapter[]> {
    try {
      return await this.prisma.chapter.findMany({
        where: { is_deleted: false },
        include: { masterclasses: true },
      });
    } catch (error) {
      this.logger.error('Error while retrieving chapters:', error);
      throw new InternalServerErrorException(
        `Failed to retrieve chapters: ${error}`
      );
    }
  }

  /**
   * Retrieve a specific chapter by ID.
   *
   * @param {string} id - The ID of the chapter to retrieve.
   * @returns {Promise<Chapter>} - The chapter with the specified ID.
   * @throws {Error} - If an error occurs while retrieving the chapter.
   */
  async findOne(id: string): Promise<Chapter> {
    try {
      return await this.prisma.chapter.findUnique({
        where: { id },
        include: { masterclasses: true },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Chapter ID validation error:', error.message);
        throw new BadRequestException(`Invalid chapter ID: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while retrieving the chapter:',
          error.message
        );
        throw new InternalServerErrorException(
          `Failed to retrieve the chapter: ${error}`
        );
      }
    }
  }

  /**
   * Update a chapter with new data.
   *
   * @param {string} id - The ID of the chapter to update.
   * @param {Prisma.ChapterUpdateInput} data - The data for updating the chapter.
   * @returns {Promise<Chapter>} - The updated chapter.
   * @throws {Error} - If an error occurs while updating the chapter.
   */
  async update(id: string, data: Prisma.ChapterUpdateInput): Promise<Chapter> {
    try {
      return await this.prisma.chapter.update({
        where: { id },
        data,
        include: { masterclasses: true },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Chapter DTO validation error:', error.message);
        throw new BadRequestException(`Invalid chapter data: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while updating the chapter:',
          error.message
        );
        throw new InternalServerErrorException(
          `Failed to update the chapter: ${error}`
        );
      }
    }
  }

  /**
   * Remove a chapter by ID.
   *
   * @param {string} id - The ID of the chapter to remove.
   * @returns {Promise<Chapter>} - The removed chapter.
   * @throws {Error} - If an error occurs while deleting the chapter.
   */
  async remove(id: string): Promise<Chapter> {
    try {
      return await this.prisma.chapter.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Chapter ID validation error:', error.message);
        throw new BadRequestException(`Invalid chapter ID: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while deleting the chapter:',
          error.message
        );
        throw new InternalServerErrorException(
          `Failed to delete the chapter: ${error}`
        );
      }
    }
  }
}
