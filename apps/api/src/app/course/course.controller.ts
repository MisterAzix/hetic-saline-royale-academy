import { Controller } from '@nestjs/common';
import { Course } from '@prisma/client';
import { CreatedBy } from '../decorators/created-by.decorator';
import { LastUpdatedBy } from '../decorators/last-updated-by.decorator';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  /**
   * Create a new course.
   *
   * @param {CreateCourseDto} createCourseDto - The data for creating the course.
   * @returns {Promise<Course>} - The created course.
   */
  async create(
    createCourseDto: CreateCourseDto,
    @CreatedBy() createdBy: string,
    @LastUpdatedBy() lastUpdatedBy: string
  ): Promise<Course> {
    return this.courseService.create({
      ...createCourseDto,
      createdBy,
      lastUpdatedBy,
    });
  }

  /**
   * Retrieve all courses.
   *
   * @returns {Promise<Course[]>} - An array of courses.
   */
  async findAll(): Promise<Course[]> {
    return this.courseService.findAll();
  }

  /**
   * Retrieve a specific course by ID.
   *
   * @param {string} id - The ID of the course to retrieve.
   * @returns {Promise<Course>} - The course with the specified ID.
   */
  async findOne(id: string): Promise<Course> {
    return this.courseService.findOne(id);
  }

  /**
   * Update a course with new data.
   *
   * @param {string} id - The ID of the course to update.
   * @param {UpdateCourseDto} updateCourseDto - The data for updating the course.
   * @returns {Promise<Course>} - The updated course.
   */
  async update(
    id: string,
    updateCourseDto: UpdateCourseDto,
    @LastUpdatedBy() lastUpdatedBy: string
  ): Promise<Course> {
    return this.courseService.update(id, {
      ...updateCourseDto,
      lastUpdatedBy,
    });
  }

  /**
   * Remove a course by ID.
   *
   * @param {string} id - The ID of the course to remove.
   * @returns {Promise<Course>} - The removed course.
   */
  async remove(id: string): Promise<Course> {
    return this.courseService.remove(id);
  }
}
