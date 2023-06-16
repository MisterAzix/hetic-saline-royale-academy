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
    return this.lessonService.create({
      ...createLessonDto,
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
    return this.lessonService.update(id, {
      ...updateLessonDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Lesson> {
    return this.lessonService.remove(id);
  }
}
