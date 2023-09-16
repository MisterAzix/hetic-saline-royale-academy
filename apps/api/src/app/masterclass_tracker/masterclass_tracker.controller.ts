import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { MasterclassTracker } from '@prisma/client';
import { CreateMasterclassTrackerDto } from './dto/create-masterclass_tracker.dto';
import { UpdateMasterclassTrackerDto } from './dto/update-masterclass_tracker.dto';
import { MasterclassTrackerEntity } from './entities/masterclass_tracker.entity';
import { MasterclassTrackerService } from './masterclass_tracker.service';

@Controller('masterclass-tracker')
@ApiTags('MasterclassTracker')
export class MasterclassTrackerController {
  constructor(
    private readonly MasterclassTrackerService: MasterclassTrackerService
  ) {}

  /**
   * Create a new masterclass tracker.
   *
   * @param {CreateMasterclassTrackerDto} createMasterclassTrackerDto - The data for creating the masterclass tracker.
   * @returns {Promise<MasterclassTracker>} - The created masterclass tracker.
   */
  @Post()
  @ApiCreatedResponse({ type: MasterclassTrackerEntity })
  create(
    @Body() createMasterclassTrackerDto: CreateMasterclassTrackerDto
  ): Promise<MasterclassTracker> {
    return this.MasterclassTrackerService.create({
      ...createMasterclassTrackerDto,
    });
  }

  /**
   * Retrieve all masterclass trackers.
   *
   * @returns {Promise<MasterclassTracker[]>} - An array of masterclass trackers.
   */
  @Get()
  @ApiCreatedResponse({ type: MasterclassTrackerEntity, isArray: true })
  findAll(): Promise<MasterclassTracker[]> {
    return this.MasterclassTrackerService.findAll();
  }

  /**
   * Retrieve a specific masterclass tracker by ID.
   *
   * @param {string} id - The ID of the masterclass tracker to retrieve.
   * @returns {Promise<MasterclassTracker>} - The masterclass tracker with the specified ID.
   */
  @Get('id/:id')
  @ApiCreatedResponse({ type: MasterclassTrackerEntity })
  findOne(@Param('id') id: string): Promise<MasterclassTracker> {
    return this.MasterclassTrackerService.findOne(id);
  }

  /**
   * Retrieve a specific masterclass tracker by ID.
   *
   * @param {string} id - The ID of the masterclass tracker to retrieve.
   * @returns {Promise<MasterclassTracker>} - The masterclass tracker with the specified ID.
   */
  @Get('user-id/:user_id')
  @ApiCreatedResponse({ type: MasterclassTrackerEntity })
  findManyByUserId(
    @Param('user_id') user_id: string
  ): Promise<MasterclassTracker[]> {
    return this.MasterclassTrackerService.findManyByUserId(user_id);
  }

  /**
   * Update a masterclass tracker with new data.
   *
   * @param {string} id - The ID of the masterclass tracker to update.
   * @param {UpdateMasterclassTrackerDto} updateMasterclassTrackerDto - The data for updating the masterclass tracker.
   * @returns {Promise<MasterclassTracker>} - The updated masterclass tracker.
   */
  @Patch('id/:id')
  @ApiCreatedResponse({ type: MasterclassTrackerEntity })
  update(
    @Param('id') id: string,
    @Body() updateMasterclassTrackerDto: UpdateMasterclassTrackerDto
  ): Promise<MasterclassTracker> {
    return this.MasterclassTrackerService.update(
      id,
      updateMasterclassTrackerDto
    );
  }

  /**
   * Remove a masterclass tracker by ID.
   *
   * @param {string} id - The ID of the masterclass tracker to remove.
   * @returns {Promise<MasterclassTracker>} - The removed masterclass tracker.
   */
  @Delete('id/:id')
  @ApiCreatedResponse({ type: MasterclassTrackerEntity })
  remove(@Param('id') id: string): Promise<MasterclassTracker> {
    return this.MasterclassTrackerService.remove(id);
  }
}
