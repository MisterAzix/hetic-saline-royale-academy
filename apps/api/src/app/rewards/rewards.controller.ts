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
import { Reward } from '@prisma/client';
import { CreateRewardDto } from './dto/create-reward.dto';
import { UpdateRewardDto } from './dto/update-reward.dto';
import { RewardEntity } from './entities/reward.entity';
import { RewardsService } from './rewards.service';

@Controller('reward')
@ApiTags('reward')
export class RewardsController {
  constructor(private readonly rewardsService: RewardsService) {}
  /**
   * Create a new reward.
   *
   * @param {CreateRewardDto} createRewardDto - The data for creating the reward.
   * @returns {Promise<Reward>} - The created reward.
   */
  @Post()
  @ApiCreatedResponse({ type: RewardEntity })
  create(@Body() createRewardDto: CreateRewardDto): Promise<Reward> {
    return this.rewardsService.create({
      ...createRewardDto,
    });
  }

  /**
   * Retrieve all rewards.
   *
   * @returns {Promise<Reward[]>} - An array of rewards.
   */
  @Get()
  @ApiOkResponse({ type: RewardEntity, isArray: true })
  findAll(): Promise<Reward[]> {
    return this.rewardsService.findAll();
  }

  /**
   * Retrieve a specific reward by ID.
   *
   * @param {string} id - The ID of the reward to retrieve.
   * @returns {Promise<Reward>} - The reward with the specified ID.
   */
  @Get(':id')
  @ApiOkResponse({ type: RewardEntity })
  findOne(@Param('id') id: string): Promise<Reward> {
    return this.rewardsService.findOne(id);
  }

  /**
   * Update a reward with new data.
   *
   * @param {string} id - The ID of the reward to update.
   * @param {UpdateRewardDto} updateRewardDto - The data for updating the reward.
   * @returns {Promise<Reward>} - The updated reward.
   */
  @Patch(':id')
  @ApiOkResponse({ type: RewardEntity })
  update(
    @Param('id') id: string,
    @Body() updateRewardDto: UpdateRewardDto
  ): Promise<Reward> {
    return this.rewardsService.update(id, {
      ...updateRewardDto,
    });
  }

  /**
   * Remove a reward by ID.
   *
   * @param {string} id - The ID of the reward to remove.
   * @returns {Promise<Reward>} - The removed reward.
   */
  @Delete(':id')
  @ApiOkResponse({ type: RewardEntity })
  remove(@Param('id') id: string): Promise<Reward> {
    return this.rewardsService.remove(id);
  }
}
