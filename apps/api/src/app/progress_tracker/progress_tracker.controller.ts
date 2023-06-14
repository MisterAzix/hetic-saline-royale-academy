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

  @Post()
  @ApiCreatedResponse({ type: ProgressTrackerEntity })
  create(
    @Body() createProgressTrackerDto: CreateProgressTrackerDto
  ): Promise<ProgressTracker> {
    return this.progressTrackerService.create({
      ...createProgressTrackerDto,
    });
  }

  @Get()
  @ApiCreatedResponse({ type: ProgressTrackerEntity, isArray: true })
  findAll(): Promise<ProgressTracker[]> {
    return this.progressTrackerService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: ProgressTrackerEntity })
  findOne(@Param('id') id: string): Promise<ProgressTracker> {
    return this.progressTrackerService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ProgressTrackerEntity })
  update(
    @Param('id') id: string,
    @Body() updateProgressTrackerDto: UpdateProgressTrackerDto
  ): Promise<ProgressTracker> {
    return this.progressTrackerService.update(id, updateProgressTrackerDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: ProgressTrackerEntity })
  remove(@Param('id') id: string): Promise<ProgressTracker> {
    return this.progressTrackerService.remove(id);
  }
}
