import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Achievement } from '@prisma/client';
import { AchievementService } from './achievement.service';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
import { AchievementEntity } from './entities/achievement.entity';

@Controller('achievement')
@ApiTags('achievement')
export class AchievementController {
  constructor(private readonly achievementService: AchievementService) {}
  /**
   * Create a new achievement.
   *
   * @param {CreateAchievementDto} createAchievementDto - The DTO containing the achievement data.
   * @returns {Promise<Achievement>} - The created achievement.
   */
  @Post()
  @ApiCreatedResponse({ type: AchievementEntity })
  create(
    @Body() createAchievementDto: CreateAchievementDto
  ): Promise<Achievement> {
    return this.achievementService.create({
      ...createAchievementDto,
    });
  }

  /**
   * Get all achievements.
   *
   * @returns {Promise<Achievement[]>} - An array of achievements.
   */
  @Get()
  @ApiOkResponse({ type: AchievementEntity, isArray: true })
  findAll(): Promise<Achievement[]> {
    return this.achievementService.findAll();
  }

  /**
   * Ge an achievement by ID.
   *
   * @param {string} id - The ID of the achievement to retrieve..
   * @returns {Promise<Achievement>} - The achievement with the specified ID.
   */
  @Get(':id')
  @ApiOkResponse({ type: AchievementEntity })
  findOne(@Param('id') id: string): Promise<Achievement> {
    return this.achievementService.findOne(id);
  }

  /**
   * Update an achievement by ID.
   *
   * @param {string} id - The ID of the achievement to update.
   * @param {UpdateAchievementDto} updateAchievementDto - The updated achievement data.
   * @returns {Promise<Achievement>} - The updated achievement.
   */
  @Patch(':id')
  @ApiOkResponse({ type: AchievementEntity })
  update(
    @Param('id') id: string,
    @Body() updateAchievementDto: UpdateAchievementDto
  ): Promise<Achievement> {
    return this.achievementService.update(id, {
      ...updateAchievementDto,
    });
  }

  /**
   * Remove an achievement by ID.
   *
   * @param {string} id - The ID of the achievement to remove.
   * @returns {Promise<Achievement>} - The removed achievement.
   */
  @Delete(':id')
  @ApiOkResponse({ type: AchievementEntity })
  remove(@Param('id') id: string): Promise<Achievement> {
    return this.achievementService.remove(id);
  }
}
