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
import { ProgressTracker } from '@prisma/client';
import { CreateProgressTrackerDto } from './dto/create-progress_tracker.dto';
import { UpdateProgressTrackerDto } from './dto/update-progress_tracker.dto';
import { ProgressTrackerEntity } from './entities/progress_tracker.entity';
import { ProgressTrackerService } from './progress_tracker.service';

@Controller('progress-tracker')
export class ProgressTrackerController {
  constructor(
    private readonly progressTrackerService: ProgressTrackerService
  ) {}

  /**
   * Create a new progress tracker.
   *
   * @param {CreateProgressTrackerDto} createProgressTrackerDto - The data for creating the progress tracker.
   * @returns {Promise<ProgressTracker>} - The created progress tracker.
   */
  @Post()
  @ApiCreatedResponse({ type: ProgressTrackerEntity })
  create(
    @Body() createProgressTrackerDto: CreateProgressTrackerDto
  ): Promise<ProgressTracker> {
    return this.progressTrackerService.create({
      ...createProgressTrackerDto,
    });
  }

  /**
   * Retrieve all progress trackers.
   *
   * @returns {Promise<ProgressTracker[]>} - An array of progress trackers.
   */
  @Get()
  @ApiCreatedResponse({ type: ProgressTrackerEntity, isArray: true })
  findAll(): Promise<ProgressTracker[]> {
    return this.progressTrackerService.findAll();
  }

  /**
   * Retrieve a specific progress tracker by ID.
   *
   * @param {string} id - The ID of the progress tracker to retrieve.
   * @returns {Promise<ProgressTracker>} - The progress tracker with the specified ID.
   */
  @Get(':id')
  @ApiCreatedResponse({ type: ProgressTrackerEntity })
  findOne(@Param('id') id: string): Promise<ProgressTracker> {
    return this.progressTrackerService.findOne(id);
  }

  /**
   * Update a progress tracker with new data.
   *
   * @param {string} id - The ID of the progress tracker to update.
   * @param {UpdateProgressTrackerDto} updateProgressTrackerDto - The data for updating the progress tracker.
   * @returns {Promise<ProgressTracker>} - The updated progress tracker.
   */
  @Patch(':id')
  @ApiCreatedResponse({ type: ProgressTrackerEntity })
  update(
    @Param('id') id: string,
    @Body() updateProgressTrackerDto: UpdateProgressTrackerDto
  ): Promise<ProgressTracker> {
    return this.progressTrackerService.update(id, updateProgressTrackerDto);
  }

  /**
   * Remove a progress tracker by ID.
   *
   * @param {string} id - The ID of the progress tracker to remove.
   * @returns {Promise<ProgressTracker>} - The removed progress tracker.
   */
  @Delete(':id')
  @ApiCreatedResponse({ type: ProgressTrackerEntity })
  remove(@Param('id') id: string): Promise<ProgressTracker> {
    return this.progressTrackerService.remove(id);
  }
}
