import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Achievement } from '@prisma/client';
import { AchievementService } from './achievement.service';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
import { AchievementEntity } from './entities/achievement.entity';

@Controller('achievement')
export class AchievementController {
  constructor(private readonly achievementService: AchievementService) {}

  @Post()
  @ApiCreatedResponse({ type: AchievementEntity })
  create(
    @Body() createAchievementDto: CreateAchievementDto
  ): Promise<Achievement> {
    return this.achievementService.create(createAchievementDto);
  }
  @Get()
  @ApiOkResponse({ type: AchievementEntity, isArray: true })
  findAll(): Promise<Achievement[]> {
    return this.achievementService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: AchievementEntity })
  findOne(@Param('id') id: string): Promise<Achievement> {
    return this.achievementService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: AchievementEntity })
  update(
    @Param('id') id: string,
    @Body() updateAchievementDto: UpdateAchievementDto
  ): Promise<Achievement> {
    return this.achievementService.update(id, updateAchievementDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: AchievementEntity })
  remove(@Param('id') id: string): Promise<Achievement> {
    return this.achievementService.remove(id);
  }
}
