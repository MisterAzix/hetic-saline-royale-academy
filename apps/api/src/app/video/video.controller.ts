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
import { Video } from '@prisma/client';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { VideoEntity } from './entities/video.entity';
import { VideoService } from './video.service';

@Controller('video')
@ApiTags('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  /**
   * Create a new video.
   *
   * @param {CreateVideoDto} createVideoDto - The data for creating the video.
   * @returns {Promise<Video>} - The created video.
   */
  @Post()
  @ApiCreatedResponse({ type: VideoEntity })
  create(@Body() createVideoDto: CreateVideoDto): Promise<Video> {
    return this.videoService.create(createVideoDto);
  }

  /**
   * Retrieve all videos.
   *
   * @returns {Promise<Video[]>} - An array of videos.
   */
  @Get()
  @ApiCreatedResponse({ type: VideoEntity, isArray: true })
  findAll(): Promise<Video[]> {
    return this.videoService.findAll();
  }

  /**
   * Retrieve a specific video by ID.
   *
   * @param {string} id - The ID of the video.
   * @returns {Promise<Video>} - The video found.
   */
  @Get(':id')
  @ApiCreatedResponse({ type: VideoEntity })
  findOne(@Param('id') id: string): Promise<Video> {
    return this.videoService.findOne(id);
  }

  /**
   * Update a video with new data.
   *
   * @param {string} id - The ID of the video to update.
   * @param {UpdateVideoDto} updateVideoDto - The data for updating the video.
   * @returns {Promise<Video>} - The updated video.
   */
  @Patch(':id')
  @ApiCreatedResponse({ type: VideoEntity })
  update(
    @Param('id') id: string,
    @Body() updateVideoDto: UpdateVideoDto
  ): Promise<Video> {
    return this.videoService.update(id, updateVideoDto);
  }

  /**
   * Remove a video by ID.
   *
   * @param {string} id - The ID of the video to remove.
   * @returns {Promise<Video>} - The removed video.
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Video> {
    return this.videoService.remove(id);
  }
}
