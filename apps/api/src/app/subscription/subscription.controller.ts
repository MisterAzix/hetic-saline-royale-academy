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

  @Post()
  @ApiCreatedResponse({ type: SubscriptionEntity })
  create(
    @Body() createSubscriptionDto: CreateSubscriptionDto
  ): Promise<Subscription> {
    return this.subscriptionService.create(createSubscriptionDto);
  }

  @Get()
  @ApiCreatedResponse({ type: SubscriptionEntity, isArray: true })
  findAll(): Promise<Subscription[]> {
    return this.subscriptionService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: SubscriptionEntity })
  findOne(@Param('id') id: string): Promise<Subscription> {
    return this.subscriptionService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: SubscriptionEntity })
  update(
    @Param('id') id: string,
    @Body() updateSubscriptionDto: UpdateSubscriptionDto
  ): Promise<Subscription> {
    return this.subscriptionService.update(id, updateSubscriptionDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: SubscriptionEntity })
  remove(@Param('id') id: string): Promise<Subscription> {
    return this.subscriptionService.remove(id);
  }
}
