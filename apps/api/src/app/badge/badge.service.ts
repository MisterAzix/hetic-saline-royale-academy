import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Badge, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class BadgeService {
  private logger = new Logger(BadgeService.name);

  constructor(private prisma: PrismaService) {}
  /**
   * Create a new badge.
   *
   * @param {Prisma.BadgeCreateInput} data - The data for creating the badge.
   * @returns {Promise<Badge>} - The created badge.
   */
  async create(data: Prisma.BadgeCreateInput): Promise<Badge> {
    try {
      const badge = await this.prisma.badge.create({ data });
      this.logger.log(`Badge has been created : ${badge.id}`);

      return badge;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error(`Badge DTO validation error: ${error.message}`);
        throw new BadRequestException(`'Badge DTO validation error: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          `An error occurred while creating the badge.: ${error.message}`
        );
        throw new InternalServerErrorException(
          `An error occurred while creating the badge. ${error}`
        );
      }
    }
  }

  /**
   * Retrieve all badges.
   *
   * @returns {Promise<Badge[]>} - An array of badges.
   */
  async findAll(): Promise<Badge[]> {
    try {
      return await this.prisma.badge.findMany({
        where: { is_deleted: false },
      });
    } catch (error) {
      this.logger.error(`Error while retrieving badges: ${error.message}`);
      throw new InternalServerErrorException(
        `Failed to retrieve badges: ${error}`
      );
    }
  }

  /**
   * Retrieve a specific badge by ID.
   *
   * @param {string} id - The ID of the badge to retrieve.
   * @returns {Promise<Badge>} - The badge with the specified ID.
   */
  async findOne(id: string): Promise<Badge> {
    try {
      return await this.prisma.badge.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error(`Badge ID validation error: ${error.message}`);
        throw new BadRequestException(`Badge DTO validation error: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          `An error occurred while retrieving badge : ${error.message}`
        );
        throw new InternalServerErrorException(
          `An error occurred while retrieving badge: ${error}`
        );
      }
    }
  }

  /**
   * Update a badge with new data.
   *
   * @param {string} id - The ID of the badge to update.
   * @param {Prisma.BadgeUpdateInput} data - The data for updating the badge.
   * @returns {Promise<Badge>} - The updated badge.
   */
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

        throw new BadRequestException(`Badge DTO validation error: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          `An error occurred while updating the badge: ${error.message}`
        );
        throw new InternalServerErrorException(
          `An error occurred while updating the badge: ${error}`
        );
      }
    }
  }

  /**
   * Remove a badge.
   *
   * @param {string} id - The ID of the badge to remove.
   * @returns {Promise<Badge>} - The removed badge.
   */
  async remove(id: string): Promise<Badge> {
    try {
      const badge = await this.prisma.badge.delete({ where: { id } });
      this.logger.warn(`Badge has been updated : ${badge.id}`);
      return badge;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error(`Badge DTO validation error: ${error.message}`);

        throw new BadRequestException(`Badge DTO validation error: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          `An error occurred while deleting badge: ${error.message}`
        );
        throw new InternalServerErrorException(
          `An error occurred while deleting badge : ${error}`
        );
      }
    }
  }
}
