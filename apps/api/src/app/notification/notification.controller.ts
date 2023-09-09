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
import { Notification } from '@prisma/client';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { NotificationEntity } from './entities/notification.entity';
import { NotificationService } from './notification.service';

@Controller('notification')
@ApiTags('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  /**
   * Create a new notification.
   *
   * @param {CreateNotificationDto} createNotificationDto - The data for creating the notification.
   * @returns {Promise<Notification>} - The created notification.
   */
  @Post()
  @ApiCreatedResponse({ type: NotificationEntity })
  create(
    @Body() createNotificationDto: CreateNotificationDto
  ): Promise<Notification> {
    return this.notificationService.create(createNotificationDto);
  }

  /**
   * Retrieve all notifications.
   *
   * @returns {Promise<Notification[]>} - An array of notifications.
   */
  @Get()
  @ApiOkResponse({ type: NotificationEntity, isArray: true })
  findAll(): Promise<Notification[]> {
    return this.notificationService.findAll();
  }

  /**
   * Retrieve a specific notification by ID.
   *
   * @param {string} id - The ID of the notification to retrieve.
   * @returns {Promise<Notification>} - The notification with the specified ID.
   */
  @Get(':id')
  @ApiOkResponse({ type: NotificationEntity })
  findOne(@Param('id') id: string): Promise<Notification> {
    return this.notificationService.findOne(id);
  }

  /**
   * Update a notification with new data.
   *
   * @param {string} id - The ID of the notification to update.
   * @param {UpdateNotificationDto} updateNotificationDto - The data for updating the notification.
   * @returns {Promise<Notification>} - The updated notification.
   */
  @Patch(':id')
  @ApiOkResponse({ type: NotificationEntity })
  update(
    @Param('id') id: string,
    @Body() updateNotificationDto: UpdateNotificationDto
  ): Promise<Notification> {
    return this.notificationService.update(id, updateNotificationDto);
  }

  /**
   * Remove a notification by ID.
   *
   * @param {string} id - The ID of the notification to remove.
   * @returns {Promise<Notification>} - The removed notification.
   */
  @Delete(':id')
  @ApiOkResponse({ type: NotificationEntity })
  remove(@Param('id') id: string): Promise<Notification> {
    return this.notificationService.remove(id);
  }
}
