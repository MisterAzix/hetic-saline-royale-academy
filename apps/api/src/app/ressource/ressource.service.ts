import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Prisma, Ressource } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class RessourceService {
  private logger = new Logger(RessourceService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Create a new resource.
   *
   * @param {Prisma.RessourceCreateInput} data - The data for creating the resource.
   * @returns {Promise<Ressource>} - The created resource.
   */
  async create(data: Prisma.RessourceCreateInput): Promise<Ressource> {
    try {
      const ressource = await this.prisma.ressource.create({ data });

      return ressource;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Ressource DTO validation error:', error.message);
        throw new BadRequestException(
          `Ressource DTO validation error: ${error}`
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while creating the ressource:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while creating the ressource: ${error}`
        );
      }
    }
  }

  /**
   * Retrieve all resources.
   *
   * @returns {Promise<Ressource[]>} - An array of resources.
   */
  async findAll(): Promise<Ressource[]> {
    try {
      return await this.prisma.ressource.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      this.logger.error('Error while retrieving resources:', error);
      throw new InternalServerErrorException(
        `Failed to retrieve resources: ${error}`
      );
    }
  }

  /**
   * Retrieve a specific resource by ID.
   *
   * @param {string} id - The ID of the resource to retrieve.
   * @returns {Promise<Ressource>} - The resource with the specified ID.
   */
  async findOne(id: string): Promise<Ressource> {
    try {
      return await this.prisma.ressource.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Ressource ID validation error:', error.message);
        throw new BadRequestException(
          `Ressource DTO validation error: ${error}`
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while retrieving the resource:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while retrieving the resource: ${error}`
        );
      }
    }
  }

  /**
   * Update a resource with new data.
   *
   * @param {string} id - The ID of the resource to update.
   * @param {Prisma.AchievementUpdateInput} data - The data for updating the resource.
   * @returns {Promise<Ressource>} - The updated resource.
   */
  async update(
    id: string,
    data: Prisma.AchievementUpdateInput
  ): Promise<Ressource> {
    try {
      return await this.prisma.ressource.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Ressource DTO validation error:', error.message);
        throw new BadRequestException(
          `Ressource DTO validation error: ${error}`
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while updating the resource:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while updating the resource: ${error}`
        );
      }
    }
  }

  /**
   * Remove a resource by ID.
   *
   * @param {string} id - The ID of the resource to remove.
   * @returns {Promise<Ressource>} - The removed resource.
   */
  async remove(id: string): Promise<Ressource> {
    try {
      return await this.prisma.ressource.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Ressource ID validation error:', error.message);
        throw new BadRequestException(
          `Ressource DTO validation error: ${error}`
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while deleting the resource:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while deleting the resource: ${error}`
        );
      }
    }
  }
}
