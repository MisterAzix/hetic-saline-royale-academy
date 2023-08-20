import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Achievement, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class AchievementService {
  private logger = new Logger(AchievementService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Create an achievement.
   *
   * @param {Prisma.AchievementCreateInput} data - The data for creating the achievement.
   * @returns {Promise<Achievement>} - The created achievement.
   * @throws {Error} - If an error occurs while creating the achievement.
   */
  async create(data: Prisma.AchievementCreateInput): Promise<Achievement> {
    try {
      const achievement = await this.prisma.achievement.create({
        data,
        include: { category: true, rewards: true, badges: true },
      });
      this.logger.log(`Achievement has been created : ${achievement.id}`);

      return achievement;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error(
          `Achievement DTO validation error : ${error.message}`
        );
        throw new BadRequestException(
          `Achievement DTO validation error: ${error}`
        );
      } else {
        // Handle other errors
        this.logger.error(
          `An error occurred while creating the achievement : ${error.message}`
        );
        throw new InternalServerErrorException(
          `An error occurred while creating the achievement: ${error}`
        );
      }
    }
  }

  /**
   * Retrieve all achievements.
   *
   * @returns {Promise<Achievement[]>} - The array of achievements.
   * @throws {Error} - If an error occurs while retrieving achievements.
   */
  async findAll(): Promise<Achievement[]> {
    try {
      return await this.prisma.achievement.findMany({
        where: { is_deleted: false },
        include: { category: true, rewards: true, badges: true },
      });
    } catch (error) {
      this.logger.error(
        `Error while retrieving achievements: ${error.messager}`
      );
      throw new InternalServerErrorException(
        `Failed to retrieve achievements: ${error}`
      );
    }
  }

  /**
   * Retrieve an achievement by its ID.
   *
   * @param {string} id - The ID of the achievement to retrieve.
   * @returns {Promise<Achievement>} - The retrieved achievement.
   * @throws {Error} - If an error occurs while retrieving the achievement.
   */
  async findOne(id: string): Promise<Achievement> {
    try {
      return await this.prisma.achievement.findUnique({
        where: { id },
        include: { category: true, rewards: true, badges: true },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error(`Achievement ID validation error: ${error.message}`);
        throw new BadRequestException(
          `Achievement DTO validation error: ${error}`
        );
      } else {
        // Handle other errors
        this.logger.error('An error occurred while retrieving achievement');
        throw new InternalServerErrorException(
          `'An error occurred while retrieving achievement: ${error}`
        );
      }
    }
  }

  /**
   * Update an achievement by its ID.
   *
   * @param {string} id - The ID of the achievement to update.
   * @param {Prisma.AchievementUpdateInput} data - The updated data for the achievement.
   * @returns {Promise<Achievement>} - The updated achievement.
   * @throws {Error} - If an error occurs while updating the achievement.
   */
  async update(
    id: string,
    data: Prisma.AchievementUpdateInput
  ): Promise<Achievement> {
    try {
      const achievement = await this.prisma.achievement.update({
        where: { id },
        data,
        include: { category: true, rewards: true, badges: true },
      });
      this.logger.warn(`Achievement has been updated : ${id}`);

      return achievement;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error(`Achievement DTO validation error: ${error.message}`);

        throw new BadRequestException(
          `Achievement DTO validation error: ${error}`
        );
      } else {
        // Handle other errors
        this.logger.error(
          `An error occurred while updating the achievement: ${error.message}`
        );
        throw new InternalServerErrorException(
          `An error occurred while updating the achievement: ${error}`
        );
      }
    }
  }

  /**
   * Remove an achievement by its ID.
   *
   * @param {string} id - The ID of the achievement to remove.
   * @returns {Promise<Achievement>} - The removed achievement.
   * @throws {Error} - If an error occurs while deleting the achievement.
   */
  async remove(id: string): Promise<Achievement> {
    try {
      const achievement = await this.prisma.achievement.delete({
        where: { id },
      });
      this.logger.warn(`Achievement has been is_deleted : ${id}`);

      return achievement;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error(` Achievement ID validation error:${error.message}`);

        throw new BadRequestException(
          `Achievement DTO validation error:${error}`
        );
      } else {
        // Handle other errors
        this.logger.error(
          `An error occurred while deleting the achievement: ${error.message}`
        );
        throw new InternalServerErrorException(
          `An error occurred while deleting achievement : ${error}`
        );
      }
    }
  }
}
