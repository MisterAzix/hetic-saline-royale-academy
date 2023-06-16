import { Injectable, Logger } from '@nestjs/common';
import { Badge, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class BadgeService {
  private logger = new Logger(BadgeService.name);

  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.BadgeCreateInput): Promise<Badge> {
    try {
      const badge = await this.prisma.badge.create({ data });
      this.logger.log(`Badge has been created : ${badge.id}`);

      return badge;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error(`Badge DTO validation error: ${error.message}`);
        throw new Error('Badge DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        throw new Error('An error occurred while creating the badge.');
      }
    }
  }

  async findAll(): Promise<Badge[]> {
    try {
      return await this.prisma.badge.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      console.error('Error while retrieving badges:', error);
      throw new Error('Failed to retrieve badges.');
    }
  }

  async findOne(id: string): Promise<Badge> {
    try {
      return await this.prisma.badge.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Badge ID validation error:', error.message);
        throw new Error('Badge DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        throw new Error('An error occurred while retrieving badge.');
      }
    }
  }

  async update(id: string, data: Prisma.BadgeUpdateInput): Promise<Badge> {
    try {
      const badge = await this.prisma.badge.update({
        where: { id },
        data,
      });
      this.logger.warn(`Badge has been updated : ${badge.id}`);
      return badge;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error(`Badge DTO validation error: ${error.message}`);
        throw new Error('Badge DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        throw new Error('An error occurred while updating the badge.');
      }
    }
  }

  async remove(id: string): Promise<Badge> {
    try {
      const badge = await this.prisma.badge.delete({ where: { id } });
      this.logger.warn(`Badge has been updated : ${badge.id}`);
      return badge;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error(`Badge DTO validation error: ${error.message}`);
        throw new Error('Badge DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        throw new Error('An error occurred while deleting badge.');
      }
    }
  }
}
