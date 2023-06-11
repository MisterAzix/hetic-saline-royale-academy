import { Injectable } from '@nestjs/common';
import { Gamification, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class GamificationService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.GamificationCreateInput): Promise<Gamification> {
    try {
      const gamification = await this.prisma.gamification.create({ data });

      return gamification;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Gamification DTO validation error:', error.message);
        throw new Error(
          'Gamification DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while creating the gamification.');
      }
    }
  }

  async findAll(): Promise<Gamification[]> {
    try {
      return await this.prisma.gamification.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      console.error('Error while retrieving gamifications:', error);
      throw new Error('Failed to retrieve gamifications.');
    }
  }

  async findOne(id: string): Promise<Gamification> {
    try {
      return await this.prisma.gamification.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Gamification ID validation error:', error.message);
        throw new Error(
          'Gamification DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while retrieving gamification.');
      }
    }
  }

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
        console.error('Gamification DTO validation error:', error.message);
        throw new Error(
          'Gamification DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while updating the gamification.');
      }
    }
  }

  async remove(id: string): Promise<Gamification> {
    try {
      return await this.prisma.gamification.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Gamification ID validation error:', error.message);
        throw new Error(
          'Gamification DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while deleting gamification.');
      }
    }
  }
}
