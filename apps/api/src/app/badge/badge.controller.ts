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
import { Badge } from '@prisma/client';
import { BadgeService } from './badge.service';
import { CreateBadgeDto } from './dto/create-badge.dto';
import { UpdateBadgeDto } from './dto/update-badge.dto';
import { BadgeEntity } from './entities/badge.entity';

@Controller('badge')
export class BadgeController {
  constructor(private readonly badgeService: BadgeService) {}
  /**
   * Create a new badge.
   *
   * @param {CreateBadgeDto} createBadgeDto - The DTO containing the badge data.
   * @returns {Promise<Badge>} - The created badge.
   */
  @Post()
  @ApiCreatedResponse({ type: BadgeEntity })
  create(@Body() createBadgeDto: CreateBadgeDto): Promise<Badge> {
    return this.badgeService.create({
      ...createBadgeDto,
    });
  }

  /**
   * Retrieve all badges.
   *
   * @returns {Promise<Badge[]>} - An array of badges.
   */
  @Get()
  @ApiCreatedResponse({ type: BadgeEntity, isArray: true })
  findAll(): Promise<Badge[]> {
    return this.badgeService.findAll();
  }

  /**
   * Retrieve a specific badge by ID.
   *
   * @param {string} id - The ID of the badge to retrieve.
   * @returns {Promise<Badge>} - The badge with the specified ID.
   */
  @Get(':id')
  @ApiCreatedResponse({ type: BadgeEntity })
  findOne(@Param('id') id: string): Promise<Badge> {
    return this.badgeService.findOne(id);
  }

  /**
   * Update a badge with new data.
   *
   * @param {string} id - The ID of the badge to update.
   * @param {UpdateBadgeDto} updateBadgeDto - The DTO containing the updated badge data.
   * @returns {Promise<Badge>} - The updated badge.
   */
  @Patch(':id')
  @ApiCreatedResponse({ type: BadgeEntity })
  update(
    @Param('id') id: string,
    @Body() updateBadgeDto: UpdateBadgeDto
  ): Promise<Badge> {
    return this.badgeService.update(id, {
      ...updateBadgeDto,
    });
  }

  /**
   * Remove a badge.
   *
   * @param {string} id - The ID of the badge to remove.
   * @returns {Promise<Badge>} - The removed badge.
   */
  @Delete(':id')
  @ApiCreatedResponse({ type: BadgeEntity })
  remove(@Param('id') id: string): Promise<Badge> {
    return this.badgeService.remove(id);
  }
}
