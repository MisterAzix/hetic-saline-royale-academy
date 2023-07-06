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
import { Subscription } from '@prisma/client';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { SubscriptionEntity } from './entities/subscription.entity';
import { SubscriptionService } from './subscription.service';

@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  /**
   * Create a new subscription.
   *
   * @param {CreateSubscriptionDto} createSubscriptionDto - The data for creating the subscription.
   * @returns {Promise<Subscription>} - The created subscription.
   */
  @Post()
  @ApiCreatedResponse({ type: SubscriptionEntity })
  create(
    @Body() createSubscriptionDto: CreateSubscriptionDto
  ): Promise<Subscription> {
    return this.subscriptionService.create(createSubscriptionDto);
  }

  /**
   * Retrieve all subscriptions.
   *
   * @returns {Promise<Subscription[]>} - An array of subscriptions.
   */
  @Get()
  @ApiCreatedResponse({ type: SubscriptionEntity, isArray: true })
  findAll(): Promise<Subscription[]> {
    return this.subscriptionService.findAll();
  }

  /**
   * Retrieve a specific subscription by ID.
   *
   * @param {string} id - The ID of the subscription to retrieve.
   * @returns {Promise<Subscription>} - The subscription with the specified ID.
   */
  @Get(':id')
  @ApiCreatedResponse({ type: SubscriptionEntity })
  findOne(@Param('id') id: string): Promise<Subscription> {
    return this.subscriptionService.findOne(id);
  }

  /**
   * Update a subscription with new data.
   *
   * @param {string} id - The ID of the subscription to update.
   * @param {UpdateSubscriptionDto} updateSubscriptionDto - The data for updating the subscription.
   * @returns {Promise<Subscription>} - The updated subscription.
   */
  @Patch(':id')
  @ApiCreatedResponse({ type: SubscriptionEntity })
  update(
    @Param('id') id: string,
    @Body() updateSubscriptionDto: UpdateSubscriptionDto
  ): Promise<Subscription> {
    return this.subscriptionService.update(id, updateSubscriptionDto);
  }

  /**
   * Remove a subscription by ID.
   *
   * @param {string} id - The ID of the subscription to remove.
   * @returns {Promise<Subscription>} - The removed subscription.
   */
  @Delete(':id')
  @ApiCreatedResponse({ type: SubscriptionEntity })
  remove(@Param('id') id: string): Promise<Subscription> {
    return this.subscriptionService.remove(id);
  }
}
