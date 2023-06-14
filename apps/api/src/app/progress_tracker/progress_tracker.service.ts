import { Injectable } from '@nestjs/common';
import { Prisma, ProgressTracker } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class ProgressTrackerService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.ProgressTrackerCreateInput
  ): Promise<ProgressTracker> {
    try {
      const ProgressTracker = await this.prisma.progressTracker.create({
        data,
      });

      return ProgressTracker;
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

  async update(
    id: string,
    data: Prisma.AchievementUpdateInput
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

  async remove(id: string): Promise<ProgressTracker> {
    try {
      return await this.prisma.progressTracker.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Progress tracker ID validation error:', error.message);
        throw new Error(
          'Progress tracke DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while deleting progress tracker.');
      }
    }
  }
}
