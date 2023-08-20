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
import { Reward } from '@prisma/client';
import { CreatedBy } from '../decorators/created-by.decorator';
import { UpdatedBy } from '../decorators/updated-by.decorator';
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
  create(
    @Body() createRewardDto: CreateRewardDto,
    @CreatedBy() created_by: string,
    @UpdatedBy() updated_by: string
  ): Promise<Reward> {
    return this.rewardsService.create({
      ...createRewardDto,
      created_by,
      updated_by,
    });
  }

  /**
   * Retrieve all rewards.
   *
   * @returns {Promise<Reward[]>} - An array of rewards.
   */
  @Get()
  @ApiCreatedResponse({ type: RewardEntity, isArray: true })
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
  @ApiCreatedResponse({ type: RewardEntity })
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
  @ApiCreatedResponse({ type: RewardEntity })
  update(
    @Param('id') id: string,
    @Body() updateRewardDto: UpdateRewardDto,
    @UpdatedBy() updated_by: string
  ): Promise<Reward> {
    return this.rewardsService.update(id, {
      ...updateRewardDto,
      updated_by,
    });
  }

  /**
   * Remove a reward by ID.
   *
   * @param {string} id - The ID of the reward to remove.
   * @returns {Promise<Reward>} - The removed reward.
   */
  @Delete(':id')
  @ApiCreatedResponse({ type: RewardEntity })
  remove(@Param('id') id: string): Promise<Reward> {
    return this.rewardsService.remove(id);
  }
}
