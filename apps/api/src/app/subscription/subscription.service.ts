import { Injectable, Logger } from '@nestjs/common';
import { Prisma, Subscription } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class SubscriptionService {
  private logger = new Logger(SubscriptionService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Create a new subscription.
   *
   * @param {Prisma.SubscriptionCreateInput} data - The data for creating the subscription.
   * @returns {Promise<Subscription>} - The created subscription.
   */
  async create(data: Prisma.SubscriptionCreateInput): Promise<Subscription> {
    try {
      const subscription = await this.prisma.subscription.create({ data });
      return subscription;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Subscription DTO validation error:', error.message);
        throw new Error(
          'Subscription DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while creating the subscription:',
          error.message
        );
        throw new Error('An error occurred while creating the subscription.');
      }
    }
  }

  /**
   * Retrieve all subscriptions.
   *
   * @returns {Promise<Subscription[]>} - An array of subscriptions.
   */
  async findAll(): Promise<Subscription[]> {
    try {
      return await this.prisma.subscription.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      this.logger.error('Error while retrieving subscriptions:', error);
      throw new Error('Failed to retrieve subscriptions.');
    }
  }

  /**
   * Retrieve a specific subscription by ID.
   *
   * @param {string} id - The ID of the subscription to retrieve.
   * @returns {Promise<Subscription>} - The subscription with the specified ID.
   */
  async findOne(id: string): Promise<Subscription> {
    try {
      return await this.prisma.subscription.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Subscription ID validation error:', error.message);
        throw new Error(
          'Subscription DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while retrieving the subscription:',
          error.message
        );
        throw new Error('An error occurred while retrieving the subscription.');
      }
    }
  }

  /**
   * Update a subscription with new data.
   *
   * @param {string} id - The ID of the subscription to update.
   * @param {Prisma.SubscriptionUpdateInput} data - The data for updating the subscription.
   * @returns {Promise<Subscription>} - The updated subscription.
   */
  async update(
    id: string,
    data: Prisma.SubscriptionUpdateInput
  ): Promise<Subscription> {
    try {
      return await this.prisma.subscription.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Subscription DTO validation error:', error.message);
        throw new Error(
          'Subscription DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while updating the subscription:',
          error.message
        );
        throw new Error('An error occurred while updating the subscription.');
      }
    }
  }

  /**
   * Remove a subscription by ID.
   *
   * @param {string} id - The ID of the subscription to remove.
   * @returns {Promise<Subscription>} - The removed subscription.
   */
  async remove(id: string): Promise<Subscription> {
    try {
      return await this.prisma.subscription.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Subscription ID validation error:', error.message);
        throw new Error(
          'Subscription DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while deleting the subscription.:',
          error.message
        );
        throw new Error('An error occurred while deleting the subscription.');
      }
    }
  }
}
