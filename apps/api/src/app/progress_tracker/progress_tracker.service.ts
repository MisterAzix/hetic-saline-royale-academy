import { Injectable } from '@nestjs/common';
import { Prisma, Progress_tracker } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class ProgressTrackerService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.Progress_trackerCreateInput
  ): Promise<Progress_tracker> {
    try {
      const progress_tracker = await this.prisma.progress_tracker.create({
        data,
      });

      return progress_tracker;
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

  async findAll(): Promise<Progress_tracker[]> {
    try {
      return await this.prisma.progress_tracker.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      console.error('Error while retrieving progress tracker:', error);
      throw new Error('Failed to retrieve progress tracker.');
    }
  }

  async findOne(id: string): Promise<Progress_tracker> {
    try {
      return await this.prisma.progress_tracker.findUnique({ where: { id } });
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
  ): Promise<Progress_tracker> {
    try {
      return await this.prisma.progress_tracker.update({
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

  async remove(id: string): Promise<Progress_tracker> {
    try {
      return await this.prisma.progress_tracker.delete({ where: { id } });
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
