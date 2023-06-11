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

  @Post()
  @ApiCreatedResponse({ type: BadgeEntity })
  create(@Body() createBadgeDto: CreateBadgeDto): Promise<Badge> {
    return this.badgeService.create(createBadgeDto);
  }

  @Get()
  @ApiCreatedResponse({ type: BadgeEntity, isArray: true })
  findAll(): Promise<Badge[]> {
    return this.badgeService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: BadgeEntity })
  findOne(@Param('id') id: string): Promise<Badge> {
    return this.badgeService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: BadgeEntity })
  update(
    @Param('id') id: string,
    @Body() updateBadgeDto: UpdateBadgeDto
  ): Promise<Badge> {
    return this.badgeService.update(id, updateBadgeDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: BadgeEntity })
  remove(@Param('id') id: string): Promise<Badge> {
    return this.badgeService.remove(id);
  }
}
