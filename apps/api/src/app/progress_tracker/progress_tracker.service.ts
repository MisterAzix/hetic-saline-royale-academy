import { Injectable } from '@nestjs/common';
import { Prisma, ProgressTracker } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class ProgressTrackerService {
  constructor(private prisma: PrismaService) {}
  /**
   * Create a new progress tracker.
   *
   * @param {Prisma.ProgressTrackerCreateInput} data - The data for creating the progress tracker.
   * @returns {Promise<ProgressTracker>} - The created progress tracker.
   */
  async create(
    data: Prisma.ProgressTrackerCreateInput
  ): Promise<ProgressTracker> {
    try {
      const progressTracker = await this.prisma.progressTracker.create({
        data,
      });

      return progressTracker;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Progress tracker DTO validation error:', error.message);
        throw new Error(
          'Progress tracker DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error(
          'An error occurred while creating the progress tracker.'
        );
      }
    }
  }

  /**
   * Retrieve all progress trackers.
   *
   * @returns {Promise<ProgressTracker[]>} - An array of progress trackers.
   */
  async findAll(): Promise<ProgressTracker[]> {
    try {
      return await this.prisma.progressTracker.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      console.error('Error while retrieving progress tracker:', error);
      throw new Error('Failed to retrieve progress tracker.');
    }
  }

  /**
   * Retrieve a specific progress tracker by ID.
   *
   * @param {string} id - The ID of the progress tracker to retrieve.
   * @returns {Promise<ProgressTracker>} - The progress tracker with the specified ID.
   */
  async findOne(id: string): Promise<ProgressTracker> {
    try {
      return await this.prisma.progressTracker.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Progress tracker ID validation error:', error.message);
        throw new Error(
          'Progress tracker DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while retrieving progress tracker.');
      }
    }
  }

  /**
   * Update a progress tracker with new data.
   *
   * @param {string} id - The ID of the progress tracker to update.
   * @param {Prisma.ProgressTrackerUpdateInput} data - The data for updating the progress tracker.
   * @returns {Promise<ProgressTracker>} - The updated progress tracker.
   */
  async update(
    id: string,
    data: Prisma.ProgressTrackerUpdateInput
  ): Promise<ProgressTracker> {
    try {
      return await this.prisma.progressTracker.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Progress tracker DTO validation error:', error.message);
        throw new Error(
          'Progress tracker DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error(
          'An error occurred while updating the progress tracker.'
        );
      }
    }
  }

  /**
   * Remove a progress tracker by ID.
   *
   * @param {string} id - The ID of the progress tracker to remove.
   * @returns {Promise<ProgressTracker>} - The removed progress tracker.
   */
  async remove(id: string): Promise<ProgressTracker> {
    try {
      return await this.prisma.progressTracker.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Progress tracker ID validation error:', error.message);
        throw new Error(
          'Progress tracker DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while deleting progress tracker.');
      }
    }
  }
}
