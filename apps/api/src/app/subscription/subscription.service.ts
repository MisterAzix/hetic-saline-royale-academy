import { Injectable } from '@nestjs/common';
import { Prisma, Subscription } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class SubscriptionService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.SubscriptionCreateInput): Promise<Subscription> {
    try {
      const subscription = await this.prisma.subscription.create({ data });

      return subscription;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Subscription DTO validation error:', error.message);
        throw new Error(
          'Subscription DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while creating the subscription.');
      }
    }
  }

  async findAll(): Promise<Subscription[]> {
    try {
      return await this.prisma.subscription.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      console.error('Error while retrieving subscriptions:', error);
      throw new Error('Failed to retrieve subscriptions.');
    }
  }

  async findOne(id: string): Promise<Subscription> {
    try {
      return await this.prisma.subscription.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Subscription ID validation error:', error.message);
        throw new Error(
          'Subscription DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while retrieving subscription.');
      }
    }
  }

  async update(
    id: string,
    data: Prisma.AchievementUpdateInput
  ): Promise<Subscription> {
    try {
      return await this.prisma.subscription.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Subscription DTO validation error:', error.message);
        throw new Error(
          'Subscription DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while updating the subscription.');
      }
    }
  }

  async remove(id: string): Promise<Subscription> {
    try {
      return await this.prisma.subscription.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Subscription ID validation error:', error.message);
        throw new Error(
          'Subscription DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while deleting subscription.');
      }
    }
  }
}
