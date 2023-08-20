import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Notification, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class NotificationService {
  private logger = new Logger(NotificationService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Create a new notification.
   *
   * @param {Prisma.NotificationCreateInput} data - The data for creating the notification.
   * @returns {Promise<Notification>} - The created notification.
   */
  async create(data: Prisma.NotificationCreateInput): Promise<Notification> {
    try {
      const notification = await this.prisma.notification.create({ data });
      return notification;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Notification DTO validation error:', error.message);
        throw new BadRequestException(
          `Notification DTO validation error: ${error}`
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while creating the notification:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while creating the notification: ${error}`
        );
      }
    }
  }

  /**
   * Retrieve all notifications.
   *
   * @returns {Promise<Notification[]>} - An array of notifications.
   */
  async findAll(): Promise<Notification[]> {
    try {
      return await this.prisma.notification.findMany({
        where: { is_deleted: false },
      });
    } catch (error) {
      this.logger.error('Error while retrieving notifications:', error);
      throw new InternalServerErrorException(
        `Failed to retrieve notifications: ${error}`
      );
    }
  }

  /**
   * Retrieve a specific notification by ID.
   *
   * @param {string} id - The ID of the notification to retrieve.
   * @returns {Promise<Notification>} - The notification with the specified ID.
   */
  async findOne(id: string): Promise<Notification> {
    try {
      return await this.prisma.notification.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Notification ID validation error:', error.message);
        throw new BadRequestException(
          `Notification DTO validation error: ${error}`
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while retrieving the notification:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while retrieving the notification: ${error}`
        );
      }
    }
  }

  /**
   * Update a notification with new data.
   *
   * @param {string} id - The ID of the notification to update.
   * @param {Prisma.NotificationUpdateInput} data - The data for updating the notification.
   * @returns {Promise<Notification>} - The updated notification.
   */
  async update(
    id: string,
    data: Prisma.NotificationUpdateInput
  ): Promise<Notification> {
    try {
      return await this.prisma.notification.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Notification DTO validation error:', error.message);
        throw new BadRequestException(
          `Notification DTO validation error: ${error}`
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while updating the notification:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while updating the notification: ${error}`
        );
      }
    }
  }

  /**
   * Remove a notification by ID.
   *
   * @param {string} id - The ID of the notification to remove.
   * @returns {Promise<Notification>} - The removed notification.
   */
  async remove(id: string): Promise<Notification> {
    try {
      return await this.prisma.notification.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Notification ID validation error:', error.message);
        throw new BadRequestException(
          `Notification DTO validation error: ${error}`
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while deleting the notification:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while deleting the notification: ${error}`
        );
      }
    }
  }
}
