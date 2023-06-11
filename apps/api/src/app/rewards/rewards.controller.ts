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
import { Rewards } from '@prisma/client';
import { CreateRewardDto } from './dto/create-reward.dto';
import { UpdateRewardDto } from './dto/update-reward.dto';
import { RewardEntity } from './entities/reward.entity';
import { RewardsService } from './rewards.service';

@Controller('rewards')
export class RewardsController {
  constructor(private readonly rewardsService: RewardsService) {}

  @Post()
  @ApiCreatedResponse({ type: RewardEntity })
  create(@Body() createRewardDto: CreateRewardDto): Promise<Rewards> {
    return this.rewardsService.create(createRewardDto);
  }

  @Get()
  @ApiCreatedResponse({ type: RewardEntity, isArray: true })
  findAll(): Promise<Rewards[]> {
    return this.rewardsService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: RewardEntity })
  findOne(@Param('id') id: string): Promise<Rewards> {
    return this.rewardsService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: RewardEntity })
  update(
    @Param('id') id: string,
    @Body() updateRewardDto: UpdateRewardDto
  ): Promise<Rewards> {
    return this.rewardsService.update(id, updateRewardDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: RewardEntity })
  remove(@Param('id') id: string): Promise<Rewards> {
    return this.rewardsService.remove(id);
  }
}
