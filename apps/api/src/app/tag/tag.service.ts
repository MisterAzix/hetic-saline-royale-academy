import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Prisma, Tag } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class TagService {
  private logger = new Logger(TagService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Create a new tag.
   *
   * @param {Prisma.TagCreateInput} data - The data for creating the tag.
   * @returns {Promise<Tag>} - The created tag.
   */
  async create(data: Prisma.TagCreateInput): Promise<Tag> {
    try {
      const tag = await this.prisma.tag.create({ data });
      return tag;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Tag DTO validation error:', error.message);
        throw new BadRequestException(`Tag DTO validation error: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while creating the tag:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while creating the tag: ${error}`
        );
      }
    }
  }

  /**
   * Retrieve all tags.
   *
   * @returns {Promise<Tag[]>} - An array of tags.
   */
  async findAll(): Promise<Tag[]> {
    try {
      return await this.prisma.tag.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      this.logger.error('Error while retrieving tags:', error);
      throw new InternalServerErrorException(
        `Failed to retrieve tags: ${error}`
      );
    }
  }

  /**
   * Retrieve a specific tag by ID.
   *
   * @param {string} id - The ID of the tag to retrieve.
   * @returns {Promise<Tag>} - The tag with the specified ID.
   */
  async findOne(id: string): Promise<Tag> {
    try {
      return await this.prisma.tag.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Tag ID validation error:', error.message);
        throw new BadRequestException(`Tag DTO validation error: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while retrieving tag:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while retrieving tag: ${error}`
        );
      }
    }
  }

  /**
   * Update a tag with new data.
   *
   * @param {string} id - The ID of the tag to update.
   * @param {Prisma.TagUpdateInput} data - The data for updating the tag.
   * @returns {Promise<Tag>} - The updated tag.
   */
  async update(id: string, data: Prisma.TagUpdateInput): Promise<Tag> {
    try {
      return await this.prisma.tag.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Tag DTO validation error:', error.message);
        throw new BadRequestException(`Tag DTO validation error: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while updating the tag:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while updating the tag: ${error}`
        );
      }
    }
  }

  /**
   * Remove a tag by ID.
   *
   * @param {string} id - The ID of the tag to remove.
   * @returns {Promise<Tag>} - The removed tag.
   */
  async remove(id: string): Promise<Tag> {
    try {
      return await this.prisma.tag.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Tag ID validation error:', error.message);
        throw new BadRequestException(`Tag DTO validation error: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while deleting tag:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while deleting tag: ${error}`
        );
      }
    }
  }
}
