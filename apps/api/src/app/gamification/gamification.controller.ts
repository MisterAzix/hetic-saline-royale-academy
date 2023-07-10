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
import { Gamification } from '@prisma/client';
import { CreateGamificationDto } from './dto/create-gamification.dto';
import { UpdateGamificationDto } from './dto/update-gamification.dto';
import { GamificationEntity } from './entities/gamification.entity';
import { GamificationService } from './gamification.service';

@Controller('gamification')
@ApiTags('gamification')
export class GamificationController {
  constructor(private readonly gamificationService: GamificationService) {}

  /**
   * Create a new gamification.
   *
   * @param {CreateGamificationDto} createGamificationDto - The data for creating the gamification.
   * @returns {Promise<Gamification>} - The created gamification.
   */
  @Post()
  @ApiCreatedResponse({ type: GamificationEntity })
  create(
    @Body() createGamificationDto: CreateGamificationDto
  ): Promise<Gamification> {
    return this.gamificationService.create(createGamificationDto);
  }

  /**
   * Retrieve all gamifications.
   *
   * @returns {Promise<Gamification[]>} - An array of gamifications.
   */
  @Get()
  @ApiCreatedResponse({ type: GamificationEntity, isArray: true })
  findAll(): Promise<Gamification[]> {
    return this.gamificationService.findAll();
  }

  /**
   * Retrieve a specific gamification by ID.
   *
   * @param {string} id - The ID of the gamification to retrieve.
   * @returns {Promise<Gamification>} - The gamification with the specified ID.
   */
  @Get(':id')
  @ApiCreatedResponse({ type: GamificationEntity })
  findOne(@Param('id') id: string): Promise<Gamification> {
    return this.gamificationService.findOne(id);
  }

  /**
   * Update a gamification with new data.
   *
   * @param {string} id - The ID of the gamification to update.
   * @param {UpdateGamificationDto} updateGamificationDto - The data for updating the gamification.
   * @returns {Promise<Gamification>} - The updated gamification.
   */
  @Patch(':id')
  @ApiCreatedResponse({ type: GamificationEntity })
  update(
    @Param('id') id: string,
    @Body() updateGamificationDto: UpdateGamificationDto
  ): Promise<Gamification> {
    return this.gamificationService.update(id, updateGamificationDto);
  }

  /**
   * Remove a gamification by ID.
   *
   * @param {string} id - The ID of the gamification to remove.
   * @returns {Promise<Gamification>} - The removed gamification.
   */
  @Delete(':id')
  @ApiCreatedResponse({ type: GamificationEntity })
  remove(@Param('id') id: string): Promise<Gamification> {
    return this.gamificationService.remove(id);
  }
}
