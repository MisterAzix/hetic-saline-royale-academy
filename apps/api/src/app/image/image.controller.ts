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

  @Post()
  @ApiCreatedResponse({ type: ImageEntity })
  create(@Body() createImageDto: CreateImageDto): Promise<Image> {
    return this.imageService.create(createImageDto);
  }

  @Get()
  @ApiCreatedResponse({ type: ImageEntity, isArray: true })
  findAll(): Promise<Image[]> {
    return this.imageService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: ImageEntity })
  findOne(@Param('id') id: string): Promise<Image> {
    return this.imageService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ImageEntity })
  update(
    @Param('id') id: string,
    @Body() updateImageDto: UpdateImageDto
  ): Promise<Image> {
    return this.imageService.update(id, updateImageDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: ImageEntity })
  remove(@Param('id') id: string): Promise<Image> {
    return this.imageService.remove(id);
  }
}
