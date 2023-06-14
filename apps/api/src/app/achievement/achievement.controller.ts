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
import { getElementIds } from '../../helper/helper.controller';
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
    const rewards = getElementIds(createAchievementDto.rewards);
    const badges = getElementIds(createAchievementDto.badges);

    return this.achievementService.create({
      ...createAchievementDto,
      rewards: { connect: rewards },
      badges: { connect: badges },
    });
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
    const rewards = getElementIds(updateAchievementDto.rewards);
    const badges = getElementIds(updateAchievementDto.badges);

    return this.achievementService.update(id, {
      ...updateAchievementDto,
      rewards: { connect: rewards },
      badges: { connect: badges },
    });
  }

  @Delete(':id')
  @ApiOkResponse({ type: AchievementEntity })
  remove(@Param('id') id: string): Promise<Achievement> {
    return this.achievementService.remove(id);
  }
}
