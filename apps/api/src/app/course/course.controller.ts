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
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Course } from '@prisma/client';
import { AdminGuard } from '../admin.guard';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CourseEntity } from './entities/course.entity';

@Controller('course')
@ApiTags('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  /**
   * Create a new course.
   *
   * @param {CreateCourseDto} createCourseDto - The data for creating the course.
   * @returns {Promise<Course>} - The created course.
   */
  @UseGuards(AdminGuard)
  @Post()
  @ApiCreatedResponse({ type: CourseEntity })
  async create(@Body() createCourseDto: CreateCourseDto): Promise<Course> {
    return this.courseService.create({
      ...createCourseDto,
    });
  }

  /**
   * Retrieve all courses subscribed by a user.
   * @param {string} id - The ID of the user whose courses are to be retrieved.
   * @returns {Promise<Course[]>} - An array of courses.
   */
  @Get('subscribe/:id')
  @ApiOkResponse({ type: [CourseEntity] })
  async findAllSubscribed(@Param('id') id: string): Promise<Course[]> {
    return this.courseService.findAllSubscribed(id);
  }

  /**
   * Retrieve all courses.
   *
   * @returns {Promise<Course[]>} - An array of courses.
   */
  @UseGuards(AdminGuard)
  @Get()
  @ApiOkResponse({ type: [CourseEntity] })
  async findAll(): Promise<Course[]> {
    return this.courseService.findAll();
  }

  /**
   * Retrieve a specific course by ID.
   *
   * @param {string} id - The ID of the course to retrieve.
   * @returns {Promise<Course>} - The course with the specified ID.
   */
  @UseGuards(AdminGuard)
  @Get(':id')
  @ApiCreatedResponse({ type: CourseEntity })
  async findOne(@Param('id') id: string): Promise<Course> {
    return this.courseService.findOne(id);
  }
  /**
   * Update a course with new data.
   *
   * @param {string} id - The ID of the course to update.
   * @param {UpdateCourseDto} updateCourseDto - The data for updating the course.
   * @returns {Promise<Course>} - The updated course.
   */
  // @UseGuards(AdminGuard)
  @Patch(':id')
  @ApiCreatedResponse({ type: CourseEntity })
  async update(
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto
  ): Promise<Course> {
    console.log('updateCourseDto', updateCourseDto);
    return this.courseService.update(id, {
      ...updateCourseDto,
    });
  }

  /**
   * Remove a course by ID.
   *
   * @param {string} id - The ID of the course to remove.
   * @returns {Promise<Course>} - The removed course.
   */
  @UseGuards(AdminGuard)
  @Delete(':id')
  @ApiCreatedResponse({ type: CourseEntity })
  async remove(id: string): Promise<Course> {
    return this.courseService.remove(id);
  }
}
