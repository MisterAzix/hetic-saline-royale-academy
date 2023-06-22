import { Injectable, Logger } from '@nestjs/common';
import { Prisma, Video } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class VideoService {
  private logger = new Logger(VideoService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Create a new video.
   *
   * @param {Prisma.VideoCreateInput} data - The data for creating the video.
   * @returns {Promise<Video>} - The created video.
   */
  async create(data: Prisma.VideoCreateInput): Promise<Video> {
    try {
      const video = await this.prisma.video.create({ data });

      return video;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Video DTO validation error:', error.message);
        throw new Error('Video DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while creating the video:',
          error.message
        );
        throw new Error('An error occurred while creating the video.');
      }
    }
  }

  /**
   * Retrieve all videos.
   *
   * @returns {Promise<Video[]>} - An array of videos.
   */
  async findAll(): Promise<Video[]> {
    try {
      return await this.prisma.video.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      this.logger.error('Error while retrieving videos:', error);
      throw new Error('Failed to retrieve videos.');
    }
  }

  /**
   * Retrieve a specific video by ID.
   *
   * @param {string} id - The ID of the video.
   * @returns {Promise<Video>} - The video found.
   */
  async findOne(id: string): Promise<Video> {
    try {
      return await this.prisma.video.findUnique({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Video ID validation error:', error.message);
        throw new Error('Video DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while retrieving video:',
          error.message
        );
        throw new Error('An error occurred while retrieving video.');
      }
    }
  }

  /**
   * Update a video with new data.
   *
   * @param {string} id - The ID of the video to update.
   * @param {Prisma.AchievementUpdateInput} data - The data for updating the video.
   * @returns {Promise<Video>} - The updated video.
   */
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
        this.logger.error('Video DTO validation error:', error.message);
        throw new Error('Video DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while updating the video:',
          error.message
        );
        throw new Error('An error occurred while updating the video.');
      }
    }
  }

  /**
   * Remove a video by ID.
   *
   * @param {string} id - The ID of the video to remove.
   * @returns {Promise<Video>} - The removed video.
   */
  async remove(id: string): Promise<Video> {
    try {
      return await this.prisma.video.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Video ID validation error:', error.message);
        throw new Error('Video DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while deleting video:',
          error.message
        );
        throw new Error('An error occurred while deleting video.');
      }
    }
  }
}
