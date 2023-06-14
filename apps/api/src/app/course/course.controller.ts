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
import { Course } from '@prisma/client';
import { getElementIds } from '../../helper/helper.controller';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CourseEntity } from './entities/course.entity';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  @ApiCreatedResponse({ type: CourseEntity })
  create(@Body() createCourseDto: CreateCourseDto): Promise<Course> {
    const chapters = getElementIds(createCourseDto.chapters);
    const tags = getElementIds(createCourseDto.tags);
    const ressources = getElementIds(createCourseDto.ressources);

    return this.courseService.create({
      ...createCourseDto,
      chapters: { connect: chapters },
      tags: { connect: tags },
      ressources: { connect: ressources },
    });
  }

  @Get()
  @ApiCreatedResponse({ type: CourseEntity, isArray: true })
  findAll(): Promise<Course[]> {
    return this.courseService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: CourseEntity })
  findOne(@Param('id') id: string): Promise<Course> {
    return this.courseService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: CourseEntity })
  update(
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto
  ): Promise<Course> {
    const chapters = getElementIds(updateCourseDto.chapters);
    const tags = getElementIds(updateCourseDto.tags);
    const ressources = getElementIds(updateCourseDto.ressources);

    return this.courseService.update(id, {
      ...updateCourseDto,
      chapters: { connect: chapters },
      tags: { connect: tags },
      ressources: { connect: ressources },
    });
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: CourseEntity })
  remove(@Param('id') id: string): Promise<Course> {
    return this.courseService.remove(id);
  }
}
