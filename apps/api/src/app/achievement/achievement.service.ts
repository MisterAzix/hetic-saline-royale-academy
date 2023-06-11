import { Injectable } from '@nestjs/common';
import { Achievement, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class AchievementService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.AchievementCreateInput): Promise<Achievement> {
    try {
      const achievement = await this.prisma.achievement.create({ data });

      return achievement;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Achievement DTO validation error:', error.message);
        throw new Error(
          'Achievement DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while creating the achievement.');
      }
    }
  }

  async findAll(): Promise<Achievement[]> {
    try {
      return await this.prisma.achievement.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      console.error('Error while retrieving achievements:', error);
      throw new Error('Failed to retrieve achievements.');
    }
  }

  async findOne(id: string): Promise<Achievement> {
    try {
      return await this.prisma.achievement.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Achievement ID validation error:', error.message);
        throw new Error(
          'Achievement DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while retrieving achievement.');
      }
    }
  }

  async update(
    id: string,
    data: Prisma.AchievementUpdateInput
  ): Promise<Achievement> {
    try {
      return await this.prisma.achievement.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Achievement DTO validation error:', error.message);
        throw new Error(
          'Achievement DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while updating the achievement.');
      }
    }
  }

  async remove(id: string): Promise<Achievement> {
    try {
      return await this.prisma.achievement.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Achievement ID validation error:', error.message);
        throw new Error(
          'Achievement DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while deleting achievement.');
      }
    }
  }
}
