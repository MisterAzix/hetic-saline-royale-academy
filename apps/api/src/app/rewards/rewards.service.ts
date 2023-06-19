import { Injectable } from '@nestjs/common';
import { Prisma, Reward } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class RewardsService {
  constructor(private prisma: PrismaService) {}

  /**
   * Create a new reward.
   *
   * @param {Prisma.RewardCreateInput} data - The data for creating the reward.
   * @returns {Promise<Reward>} - The created reward.
   */
  async create(data: Prisma.RewardCreateInput): Promise<Reward> {
    try {
      const reward = await this.prisma.reward.create({ data });
      return reward;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Reward DTO validation error:', error.message);
        throw new Error(
          'Reward DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while creating the reward.');
      }
    }
  }

  /**
   * Retrieve all rewards.
   *
   * @returns {Promise<Reward[]>} - An array of rewards.
   */
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

  /**
   * Retrieve a specific reward by ID.
   *
   * @param {string} id - The ID of the reward to retrieve.
   * @returns {Promise<Reward>} - The reward with the specified ID.
   */
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
        throw new Error('An error occurred while retrieving the reward.');
      }
    }
  }

  /**
   * Update a reward with new data.
   *
   * @param {string} id - The ID of the reward to update.
   * @param {Prisma.RewardUpdateInput} data - The data for updating the reward.
   * @returns {Promise<Reward>} - The updated reward.
   */
  async update(id: string, data: Prisma.RewardUpdateInput): Promise<Reward> {
    try {
      return await this.prisma.reward.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Reward DTO validation error:', error.message);
        throw new Error(
          'Reward DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while updating the reward.');
      }
    }
  }

  /**
   * Remove a reward by ID.
   *
   * @param {string} id - The ID of the reward to remove.
   * @returns {Promise<Reward>} - The removed reward.
   */
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
        throw new Error('An error occurred while deleting the reward.');
      }
    }
  }
}
