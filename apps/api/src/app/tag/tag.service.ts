import { Injectable } from '@nestjs/common';
import { Prisma, Tag } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class TagService {
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
        console.error('Tag DTO validation error:', error.message);
        throw new Error('Tag DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        throw new Error('An error occurred while creating the tag.');
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
      console.error('Error while retrieving tags:', error);
      throw new Error('Failed to retrieve tags.');
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
        console.error('Tag ID validation error:', error.message);
        throw new Error('Tag DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        throw new Error('An error occurred while retrieving tag.');
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
        console.error('Tag DTO validation error:', error.message);
        throw new Error('Tag DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        throw new Error('An error occurred while updating the tag.');
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
        console.error('Tag ID validation error:', error.message);
        throw new Error('Tag DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        throw new Error('An error occurred while deleting tag.');
      }
    }
  }
}
