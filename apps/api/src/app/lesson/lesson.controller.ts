import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Lesson } from '@prisma/client';
import { AdminGuard } from '../admin.guard';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { LessonEntity } from './entities/lesson.entity';
import { LessonService } from './lesson.service';

@Controller('lesson')
@ApiTags('lesson')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}
  /**
   * Create a new lesson.
   *
   * @param {CreateLessonDto} createLessonDto - The data for creating the lesson.
   * @returns {Promise<Lesson>} - The created lesson.
   */
  @UseGuards(AdminGuard)
  @Post()
  @ApiCreatedResponse({ type: LessonEntity })
  create(@Body() createLessonDto: CreateLessonDto): Promise<Lesson> {
    return this.lessonService.create({
      ...createLessonDto,
    });
  }

  /**
   * Retrieve all lessons.
   *
   * @returns {Promise<Lesson[]>} - An array of lessons.
   */
  @UseGuards(AdminGuard)
  @Get()
  @ApiCreatedResponse({ type: LessonEntity, isArray: true })
  findAll(): Promise<Lesson[]> {
    return this.lessonService.findAll();
  }

  /**
   * Retrieve a specific lesson by ID.
   *
   * @param {string} id - The ID of the lesson to retrieve.
   * @returns {Promise<Lesson>} - The lesson with the specified ID.
   */
  @UseGuards(AdminGuard)
  @Get(':id')
  @ApiCreatedResponse({ type: LessonEntity })
  findOne(@Param('id') id: string): Promise<Lesson> {
    return this.lessonService.findOne(id);
  }

  /**
   * Update a lesson with new data.
   *
   * @param {string} id - The ID of the lesson to update.
   * @param {UpdateLessonDto} updateLessonDto - The data for updating the lesson.
   * @returns {Promise<Lesson>} - The updated lesson.
   */
  @UseGuards(AdminGuard)
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

  /**
   * Remove a lesson by ID.
   *
   * @param {string} id - The ID of the lesson to remove.
   * @returns {Promise<Lesson>} - The removed lesson.
   */
  @UseGuards(AdminGuard)
  @ApiCreatedResponse({ type: LessonEntity })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Lesson> {
    return this.lessonService.remove(id);
  }
}
