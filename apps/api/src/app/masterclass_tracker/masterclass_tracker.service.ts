import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Prisma, MasterclassTracker } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class MasterclassTrackerService {
  private logger = new Logger(MasterclassTrackerService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Create a new masterclass tracker.
   *
   * @param {Prisma.MasterclassTrackerCreateInput} data - The data for creating the masterclass tracker.
   * @returns {Promise<MasterclassTracker>} - The created masterclass tracker.
   */
  async create(
    data: Prisma.MasterclassTrackerCreateInput
  ): Promise<MasterclassTracker> {
    try {
      const MasterclassTracker = await this.prisma.masterclassTracker.create({
        data,
      });

      return MasterclassTracker;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error(
          'masterclass tracker DTO validation error:',
          error.message
        );
        throw new BadRequestException(
          `masterclass tracker DTO validation error: ${error}`
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while creating the masterclass tracker:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while creating the masterclass tracker: ${error}`
        );
      }
    }
  }

  /**
   * Retrieve all masterclass trackers.
   *
   * @returns {Promise<MasterclassTracker[]>} - An array of masterclass trackers.
   */
  async findAll(): Promise<MasterclassTracker[]> {
    try {
      return await this.prisma.masterclassTracker.findMany({
        where: { is_deleted: false },
      });
    } catch (error) {
      this.logger.error('Error while retrieving masterclass tracker:', error);
      throw new InternalServerErrorException(
        `Failed to retrieve masterclass tracker: ${error}`
      );
    }
  }

  /**
   * Retrieve a specific masterclass tracker by ID.
   *
   * @param {string} id - The ID of the masterclass tracker to retrieve.
   * @returns {Promise<MasterclassTracker>} - The masterclass tracker with the specified ID.
   */
  async findOne(id: string): Promise<MasterclassTracker> {
    try {
      return await this.prisma.masterclassTracker.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error(
          'masterclass tracker ID validation error:',
          error.message
        );
        throw new BadRequestException(
          `masterclass tracker DTO validation error: ${error}`
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while retrieving masterclass tracker.:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while retrieving the masterclass tracker: ${error}`
        );
      }
    }
  }

  /**
   * Retrieve a specific masterclass tracker by user ID.
   *
   * @param {string} user_id - The ID of the user attach to a masterclass tracker to retrieve.
   * @returns {Promise<MasterclassTracker[]>} - The masterclass tracker with the specified user ID.
   */
  async findManyByUserId(user_id: string): Promise<MasterclassTracker[]> {
    try {
      return await this.prisma.masterclassTracker.findMany({
        where: { user_id },
        include: { masterclass: true },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('User ID validation error:', error.message);
        throw new BadRequestException(
          `masterclass Tracker DTO validation error: ${error}`
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while retrieving masterclass tracker.:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while retrieving the masterclass tracker: ${error}`
        );
      }
    }
  }

  /**
   * Update a masterclass tracker with new data.
   *
   * @param {string} id - The ID of the masterclass tracker to update.
   * @param {Prisma.MasterclassTrackerUpdateInput} data - The data for updating the masterclass tracker.
   * @returns {Promise<MasterclassTracker>} - The updated masterclass tracker.
   */
  async update(
    id: string,
    data: Prisma.MasterclassTrackerUpdateInput
  ): Promise<MasterclassTracker> {
    try {
      return await this.prisma.masterclassTracker.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error(
          'masterclass tracker DTO validation error:',
          error.message
        );
        throw new BadRequestException(
          `masterclass tracker DTO validation error: ${error}`
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while updating the masterclass tracker:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while updating the masterclass tracker: ${error}`
        );
      }
    }
  }

  /**
   * Remove a masterclass tracker by ID.
   *
   * @param {string} id - The ID of the masterclass tracker to remove.
   * @returns {Promise<MasterclassTracker>} - The removed masterclass tracker.
   */
  async remove(id: string): Promise<MasterclassTracker> {
    try {
      return await this.prisma.masterclassTracker.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error(
          'masterclass tracker ID validation error:',
          error.message
        );
        throw new BadRequestException(
          `masterclass tracker DTO validation error: ${error}`
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while deleting masterclass tracker:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while deleting the masterclass tracker: ${error}`
        );
      }
    }
  }
}
