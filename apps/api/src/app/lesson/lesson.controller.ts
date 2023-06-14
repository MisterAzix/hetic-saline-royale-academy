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
import { Lesson } from '@prisma/client';
import { getElementIds } from '../../helper/helper.controller';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { LessonEntity } from './entities/lesson.entity';
import { LessonService } from './lesson.service';

@Controller('lesson')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Post()
  @ApiCreatedResponse({ type: LessonEntity })
  create(@Body() createLessonDto: CreateLessonDto): Promise<Lesson> {
    const images = getElementIds(createLessonDto.images);
    const videos = getElementIds(createLessonDto.videos);
    const tags = getElementIds(createLessonDto.tags);
    const ressources = getElementIds(createLessonDto.ressources);

    return this.lessonService.create({
      ...createLessonDto,
      images: { connect: images },
      videos: { connect: videos },
      tags: { connect: tags },
      ressources: { connect: ressources },
    });
  }

  @Get()
  @ApiCreatedResponse({ type: LessonEntity, isArray: true })
  findAll(): Promise<Lesson[]> {
    return this.lessonService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: LessonEntity })
  findOne(@Param('id') id: string): Promise<Lesson> {
    return this.lessonService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: LessonEntity })
  update(
    @Param('id') id: string,
    @Body() updateLessonDto: UpdateLessonDto
  ): Promise<Lesson> {
    const images = getElementIds(updateLessonDto.images);
    const videos = getElementIds(updateLessonDto.videos);
    const tags = getElementIds(updateLessonDto.tags);
    const ressources = getElementIds(updateLessonDto.ressources);

    return this.lessonService.update(id, {
      ...updateLessonDto,
      images: { connect: images },
      videos: { connect: videos },
      tags: { connect: tags },
      ressources: { connect: ressources },
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Lesson> {
    return this.lessonService.remove(id);
  }
}
