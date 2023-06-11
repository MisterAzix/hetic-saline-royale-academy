import { Injectable } from '@nestjs/common';
import { Notification, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class NotificationService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.NotificationCreateInput): Promise<Notification> {
    try {
      const notification = await this.prisma.notification.create({ data });

      return notification;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Notification DTO validation error:', error.message);
        throw new Error(
          'Notification DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while creating the notification.');
      }
    }
  }

  async findAll(): Promise<Notification[]> {
    try {
      return await this.prisma.notification.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      console.error('Error while retrieving notification:', error);
      throw new Error('Failed to retrieve notification.');
    }
  }

  async findOne(id: string): Promise<Notification> {
    try {
      return await this.prisma.notification.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Notification ID validation error:', error.message);
        throw new Error(
          'Notification DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while retrieving notification.');
      }
    }
  }

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
        console.error('Notification DTO validation error:', error.message);
        throw new Error(
          'Notification DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while updating the notification.');
      }
    }
  }

  async remove(id: string): Promise<Notification> {
    try {
      return await this.prisma.notification.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Notification ID validation error:', error.message);
        throw new Error(
          'Notification DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while deleting notification.');
      }
    }
  }
}
