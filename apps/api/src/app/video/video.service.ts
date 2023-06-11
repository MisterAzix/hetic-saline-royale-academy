import { Injectable } from '@nestjs/common';
import { Prisma, Video } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class VideoService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.VideoCreateInput): Promise<Video> {
    try {
      const video = await this.prisma.video.create({ data });

      return video;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Video DTO validation error:', error.message);
        throw new Error('Video DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        throw new Error('An error occurred while creating the video.');
      }
    }
  }

  async findAll(): Promise<Video[]> {
    try {
      return await this.prisma.video.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      console.error('Error while retrieving videos:', error);
      throw new Error('Failed to retrieve videos.');
    }
  }

  async findOne(id: string): Promise<Video> {
    try {
      return await this.prisma.video.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Video ID validation error:', error.message);
        throw new Error('Video DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        throw new Error('An error occurred while retrieving video.');
      }
    }
  }

  async update(
    id: string,
    data: Prisma.AchievementUpdateInput
  ): Promise<Video> {
    try {
      return await this.prisma.video.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Video DTO validation error:', error.message);
        throw new Error('Video DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        throw new Error('An error occurred while updating the video.');
      }
    }
  }

  async remove(id: string): Promise<Video> {
    try {
      return await this.prisma.video.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Video ID validation error:', error.message);
        throw new Error('Video DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        throw new Error('An error occurred while deleting video.');
      }
    }
  }
}
