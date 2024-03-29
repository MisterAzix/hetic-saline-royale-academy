import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Chapter, Masterclass, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class MasterclassService {
  private logger = new Logger(MasterclassService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService
  ) {}

  /**
   * Create a new masterclass.
   *
   * @param {Express.Multer.File} file - The file for creating the masterclass.
   * @returns {Promise<Masterclass>} - The created masterclass.
   */
  async create(file: Express.Multer.File): Promise<Masterclass> {
    const { secure_url, public_id } = await this.cloudinaryService.uploadAsset(
      file
    );

    const thumbnail_url = await this.cloudinaryService.getVideoThumbnail(
      public_id,
      {
        width: 640,
        height: 360,
      }
    );

    try {
      return this.prisma.masterclass.create({
        data: {
          title: file.originalname,
          video_url: secure_url,
          cover_url: thumbnail_url,
        },
        include: {
          chapters: {
            orderBy: { created_at: 'asc' },
          },
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        this.logger.error('Masterclass DTO validation error:', error.message);
        throw new BadRequestException(
          `Masterclass DTO validation error: ${error}`
        );
      }
      throw error;
    }
  }

  /**
   * Retrieve all masterclasses.
   *
   * @returns {Promise<Masterclass[]>} - An array of masterclasses.
   */
  async findAll(): Promise<Masterclass[]> {
    try {
      return await this.prisma.masterclass.findMany({
        orderBy: { created_at: 'desc' },
        include: {
          chapters: {
            orderBy: { created_at: 'asc' },
          },
        },
      });
    } catch (error) {
      this.logger.error('Error while retrieving masterclasses:', error);
      throw new InternalServerErrorException(
        `Failed to retrieve masterclasses: ${error}`
      );
    }
  }

  /**
   * Retrieve a specific masterclass by ID.
   *
   * @param {string} id - The ID of the masterclass to retrieve.
   * @returns {Promise<Masterclass>} - The masterclass with the specified ID.
   */
  async findOne(id: string): Promise<Masterclass> {
    try {
      return await this.prisma.masterclass.findUnique({
        where: { id },
        include: {
          chapters: {
            orderBy: { created_at: 'asc' },
          },
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Masterclass ID validation error:', error.message);
        throw new BadRequestException(
          `Masterclass DTO validation error: ${error}`
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while retrieving masterclass:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while retrieving masterclass: ${error}`
        );
      }
    }
  }

  /**
   * Update a masterclass with new data.
   *
   * @param {string} id - The ID of the masterclass to update.
   * @param {Prisma.MasterclassUpdateInput} data - The data for updating the masterclass.
   * @param {Chapter[]} newChapters - The chapters to update.
   * @returns {Promise<Masterclass>} - The updated masterclass.
   */
  async update(
    id: string,
    data: Prisma.MasterclassUpdateInput,
    newChapters: Chapter[]
  ): Promise<Masterclass> {
    try {
      const chapters = await this.prisma.chapter.findMany({
        where: { masterclass_id: id },
      });

      const chaptersToCreate = newChapters.filter(
        (chapter) => !chapters.some((c) => c.id === chapter.id)
      );

      const chaptersToDelete = chapters.filter(
        (chapter) => !newChapters.some((c) => c.id === chapter.id)
      );

      const chaptersToUpdate = newChapters.filter((chapter) =>
        chapters.some((c) => c.id === chapter.id)
      );

      return await this.prisma.masterclass.update({
        where: { id },
        data: {
          ...data,
          chapters: {
            create: chaptersToCreate,
            update: chaptersToUpdate.map((chapter) => ({
              where: { id: chapter.id },
              data: {
                title: chapter.title,
                timecode: chapter.timecode,
              },
            })),
            delete: chaptersToDelete.map((chapter) => ({ id: chapter.id })),
          },
        },
        include: {
          chapters: {
            orderBy: { created_at: 'asc' },
          },
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Masterclass DTO validation error:', error.message);
        throw new BadRequestException(
          `Masterclass DTO validation error: ${error}`
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while updating the masterclass:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while updating the masterclass: ${error}`
        );
      }
    }
  }

  /**
   * Remove a masterclass by ID.
   *
   * @param {string} id - The ID of the masterclass to remove.
   * @returns {Promise<Masterclass>} - The removed masterclass.
   */
  async remove(id: string): Promise<Masterclass> {
    try {
      return await this.prisma.masterclass.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Masterclass ID validation error:', error.message);
        throw new BadRequestException(
          `Masterclass DTO validation error: ${error}`
        );
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while deleting masterclass:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while deleting masterclass: ${error}`
        );
      }
    }
  }
}
