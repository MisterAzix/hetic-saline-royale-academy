import { Injectable } from '@nestjs/common';
import { Prisma, Ressource } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class RessourceService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.RessourceCreateInput): Promise<Ressource> {
    try {
      const ressource = await this.prisma.ressource.create({ data });

      return ressource;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Ressource DTO validation error:', error.message);
        throw new Error(
          'Ressource DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while creating the ressource.');
      }
    }
  }

  async findAll(): Promise<Ressource[]> {
    try {
      return await this.prisma.ressource.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      console.error('Error while retrieving ressources:', error);
      throw new Error('Failed to retrieve ressources.');
    }
  }

  async findOne(id: string): Promise<Ressource> {
    try {
      return await this.prisma.ressource.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Ressource ID validation error:', error.message);
        throw new Error(
          'Ressource DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while retrieving ressource.');
      }
    }
  }

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
        console.error('Ressource DTO validation error:', error.message);
        throw new Error(
          'Ressource DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while updating the ressource.');
      }
    }
  }

  async remove(id: string): Promise<Ressource> {
    try {
      return await this.prisma.ressource.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Ressource ID validation error:', error.message);
        throw new Error(
          'Ressource DTO validation error: ' + JSON.stringify(error)
        );
      } else {
        // Handle other errors
        throw new Error('An error occurred while deleting ressource.');
      }
    }
  }
}
