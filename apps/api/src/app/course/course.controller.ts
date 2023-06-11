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
    return this.courseService.create(createCourseDto);
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
    return this.courseService.update(id, updateCourseDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: CourseEntity })
  remove(@Param('id') id: string): Promise<Course> {
    return this.courseService.remove(id);
  }
}
