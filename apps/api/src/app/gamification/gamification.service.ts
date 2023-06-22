import { Injectable, Logger } from '@nestjs/common';
import { Gamification, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class GamificationService {
  private logger = new Logger(GamificationService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Create a new gamification.
   *
   * @param {Prisma.GamificationCreateInput} data - The data for creating the gamification.
   * @returns {Promise<Gamification>} - The created gamification.
   */
  async create(data: Prisma.GamificationCreateInput): Promise<Gamification> {
    try {
      const gamification = await this.prisma.gamification.create({ data });

      return gamification;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Gamification DTO validation error:', error.message);
        throw new Error(
          'Gamification DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while creating the gamification:',
          error.message
        );
        throw new Error('An error occurred while creating the gamification.');
      }
    }
  }

  /**
   * Retrieve all gamifications.
   *
   * @returns {Promise<Gamification[]>} - An array of gamifications.
   */
  async findAll(): Promise<Gamification[]> {
    try {
      return await this.prisma.gamification.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      this.logger.error('Error while retrieving gamifications:', error);
      throw new Error('Failed to retrieve gamifications.');
    }
  }

  /**
   * Retrieve a specific gamification by ID.
   *
   * @param {string} id - The ID of the gamification to retrieve.
   * @returns {Promise<Gamification>} - The gamification with the specified ID.
   */
  async findOne(id: string): Promise<Gamification> {
    try {
      return await this.prisma.gamification.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Gamification ID validation error:', error.message);
        throw new Error(
          'Gamification DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while retrieving gamification:',
          error.message
        );
        throw new Error('An error occurred while retrieving gamification.');
      }
    }
  }

  /**
   * Update a gamification with new data.
   *
   * @param {string} id - The ID of the gamification to update.
   * @param {Prisma.AchievementUpdateInput} data - The data for updating the gamification.
   * @returns {Promise<Gamification>} - The updated gamification.
   */
  async update(
    id: string,
    data: Prisma.AchievementUpdateInput
  ): Promise<Gamification> {
    try {
      return await this.prisma.gamification.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Gamification DTO validation error:', error.message);
        throw new Error(
          'Gamification DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while updating the gamification:',
          error.message
        );
        throw new Error('An error occurred while updating the gamification.');
      }
    }
  }

  /**
   * Remove a gamification by ID.
   *
   * @param {string} id - The ID of the gamification to remove.
   * @returns {Promise<Gamification>} - The removed gamification.
   */
  async remove(id: string): Promise<Gamification> {
    try {
      return await this.prisma.gamification.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Gamification ID validation error:', error.message);
        throw new Error(
          'Gamification DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while deleting gamification:',
          error.message
        );
        throw new Error('An error occurred while deleting gamification.');
      }
    }
  }
}
