import { Injectable } from '@nestjs/common';
import { Prisma, Reward } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class RewardsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.RewardCreateInput): Promise<Reward> {
    try {
      const rewards = await this.prisma.reward.create({ data });

      return rewards;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Reward DTO validation error:', error.message);
        throw new Error(
          'Reward DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while creating the rewards.');
      }
    }
  }

  async findAll(): Promise<Reward[]> {
    try {
      return await this.prisma.reward.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      console.error('Error while retrieving rewards:', error);
      throw new Error('Failed to retrieve rewards.');
    }
  }

  async findOne(id: string): Promise<Reward> {
    try {
      return await this.prisma.reward.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Reward ID validation error:', error.message);
        throw new Error(
          'Reward DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while retrieving rewards.');
      }
    }
  }

  async update(
    id: string,
    data: Prisma.AchievementUpdateInput
  ): Promise<Reward> {
    try {
      return await this.prisma.reward.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Rewards DTO validation error:', error.message);
        throw new Error(
          'Reward DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while updating the reward.');
      }
    }
  }

  async remove(id: string): Promise<Reward> {
    try {
      return await this.prisma.reward.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Reward ID validation error:', error.message);
        throw new Error(
          'Reward DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while deleting reward.');
      }
    }
  }
}
