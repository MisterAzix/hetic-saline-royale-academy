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
import { Gamification } from '@prisma/client';
import { CreateGamificationDto } from './dto/create-gamification.dto';
import { UpdateGamificationDto } from './dto/update-gamification.dto';
import { GamificationEntity } from './entities/gamification.entity';
import { GamificationService } from './gamification.service';

@Controller('gamification')
export class GamificationController {
  constructor(private readonly gamificationService: GamificationService) {}

  @Post()
  @ApiCreatedResponse({ type: GamificationEntity })
  create(
    @Body() createGamificationDto: CreateGamificationDto
  ): Promise<Gamification> {
    return this.gamificationService.create(createGamificationDto);
  }

  @Get()
  @ApiCreatedResponse({ type: GamificationEntity, isArray: true })
  findAll(): Promise<Gamification[]> {
    return this.gamificationService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: GamificationEntity })
  findOne(@Param('id') id: string): Promise<Gamification> {
    return this.gamificationService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: GamificationEntity })
  update(
    @Param('id') id: string,
    @Body() updateGamificationDto: UpdateGamificationDto
  ): Promise<Gamification> {
    return this.gamificationService.update(id, updateGamificationDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: GamificationEntity })
  remove(@Param('id') id: string): Promise<Gamification> {
    return this.gamificationService.remove(id);
  }
}
