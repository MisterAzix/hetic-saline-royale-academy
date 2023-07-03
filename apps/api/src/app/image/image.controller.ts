import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { Image } from '@prisma/client';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { ImageEntity } from './entities/image.entity';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  /**
   * Create a new image.
   *
   * @param {CreateImageDto} createImageDto - The data for creating the image.
   * @returns {Promise<Image>} - The created image.
   */
  @Post()
  @ApiCreatedResponse({ type: ImageEntity })
  create(@Body() createImageDto: CreateImageDto): Promise<Image> {
    return this.imageService.create(createImageDto);
  }

  /**
   * Retrieve all images.
   *
   * @returns {Promise<Image[]>} - An array of images.
   */
  @Get()
  @ApiCreatedResponse({ type: ImageEntity, isArray: true })
  findAll(): Promise<Image[]> {
    return this.imageService.findAll();
  }

  /**
   * Retrieve a specific image by ID.
   *
   * @param {string} id - The ID of the image to retrieve.
   * @returns {Promise<Image>} - The image with the specified ID.
   */
  @Get(':id')
  @ApiCreatedResponse({ type: ImageEntity })
  findOne(@Param('id') id: string): Promise<Image> {
    return this.imageService.findOne(id);
  }

  /**
   * Update an image with new data.
   *
   * @param {string} id - The ID of the image to update.
   * @param {UpdateImageDto} updateImageDto - The data for updating the image.
   * @returns {Promise<Image>} - The updated image.
   */
  @Patch(':id')
  @ApiCreatedResponse({ type: ImageEntity })
  update(
    @Param('id') id: string,
    @Body() updateImageDto: UpdateImageDto
  ): Promise<Image> {
    return this.imageService.update(id, updateImageDto);
  }

  /**
   * Remove an image by ID.
   *
   * @param {string} id - The ID of the image to remove.
   * @returns {Promise<Image>} - The removed image.
   */
  @Delete(':id')
  @ApiCreatedResponse({ type: ImageEntity })
  remove(@Param('id') id: string): Promise<Image> {
    return this.imageService.remove(id);
  }
}
