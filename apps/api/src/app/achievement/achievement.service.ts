import { Injectable, Logger } from '@nestjs/common';
import { Achievement, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class AchievementService {
  private logger = new Logger(AchievementService.name);

  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.AchievementCreateInput): Promise<Achievement> {
    try {
      const achievement = await this.prisma.achievement.create({ data });
      this.logger.log(`Achievement has been created : ${achievement.id}`);

      return achievement;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error(
          `Achievement DTO validation error: : ${error.message}`
        );
        throw new Error(
          'Achievement DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while creating the achievement.');
      }
    }
  }

  async findAll(): Promise<Achievement[]> {
    try {
      return await this.prisma.achievement.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      this.logger.log(`Error while retrieving achievements: ${error}`);
      throw new Error('Failed to retrieve achievements.');
    }
  }

  async findOne(id: string): Promise<Achievement> {
    try {
      return await this.prisma.achievement.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error(`Achievement ID validation error: ${error.message}`);
        throw new Error(
          'Achievement DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while retrieving achievement.');
      }
    }
  }

  async update(
    id: string,
    data: Prisma.AchievementUpdateInput
  ): Promise<Achievement> {
    try {
      const achievement = await this.prisma.achievement.update({
        where: { id },
        data,
      });
      this.logger.warn(`Achievement has been updated : ${id}`);

      return achievement;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error(`Achievement DTO validation error: ${error.message}`);

        throw new Error(
          'Achievement DTO validation error: ' + JSON.stringify(id)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while updating the achievement.');
      }
    }
  }

  async remove(id: string): Promise<Achievement> {
    try {
      const achievement = await this.prisma.achievement.delete({
        where: { id },
      });
      this.logger.warn(`Achievement has been deleted : ${id}`);

      return achievement;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error(` Achievement ID validation error:${error.message}`);

        throw new Error(
          'Achievement DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while deleting achievement.');
      }
    }
  }
}
