import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Masterclass, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class MasterclassService {
  private logger = new Logger(MasterclassService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Create a new lesson.
   *
   * @param {Prisma.MasterclassCreateInput} data - The data for creating the lesson.
   * @returns {Promise<Masterclass>} - The created lesson.
   */
  async create(data: Prisma.MasterclassCreateInput): Promise<Masterclass> {
    try {
      const lesson = await this.prisma.masterclass.create({ data });
      return lesson;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Masterclass DTO validation error:', error.message);
        throw new BadRequestException(
          `Masterclass DTO validation error: ${error}`
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while creating the lesson:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while creating the lesson: ${error}`
        );
      }
    }
  }

  /**
   * Retrieve all masterclasses.
   *
   * @returns {Promise<Masterclass[]>} - An array of masterclasses.
   */
  async findAll(): Promise<Masterclass[]> {
    try {
      return await this.prisma.masterclass.findMany({
        where: { is_deleted: false },
      });
    } catch (error) {
      this.logger.error('Error while retrieving masterclasses:', error);
      throw new InternalServerErrorException(
        `Failed to retrieve masterclasses: ${error}`
      );
    }
  }

  /**
   * Retrieve a specific lesson by ID.
   *
   * @param {string} id - The ID of the lesson to retrieve.
   * @returns {Promise<Masterclass>} - The lesson with the specified ID.
   */
  async findOne(id: string): Promise<Masterclass> {
    try {
      return await this.prisma.masterclass.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Masterclass ID validation error:', error.message);
        throw new BadRequestException(
          `Masterclass DTO validation error: ${error}`
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while retrieving lesson:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while retrieving lesson: ${error}`
        );
      }
    }
  }

  /**
   * Update a lesson with new data.
   *
   * @param {string} id - The ID of the lesson to update.
   * @param {Prisma.MasterclassUpdateInput} data - The data for updating the lesson.
   * @returns {Promise<Masterclass>} - The updated lesson.
   */
  async update(
    id: string,
    data: Prisma.MasterclassUpdateInput
  ): Promise<Masterclass> {
    try {
      return await this.prisma.masterclass.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Masterclass DTO validation error:', error.message);
        throw new BadRequestException(
          `Masterclass DTO validation error: ${error}`
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while updating the lesson:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while updating the lesson: ${error}`
        );
      }
    }
  }

  /**
   * Remove a lesson by ID.
   *
   * @param {string} id - The ID of the lesson to remove.
   * @returns {Promise<Masterclass>} - The removed lesson.
   */
  async remove(id: string): Promise<Masterclass> {
    try {
      return await this.prisma.masterclass.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Masterclass ID validation error:', error.message);
        throw new BadRequestException(
          `Masterclass DTO validation error: ${error}`
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while deleting lesson:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while deleting lesson: ${error}`
        );
      }
    }
  }
}
