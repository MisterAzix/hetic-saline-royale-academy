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
import { Video } from '@prisma/client';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { VideoEntity } from './entities/video.entity';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post()
  @ApiCreatedResponse({ type: VideoEntity })
  create(@Body() createVideoDto: CreateVideoDto): Promise<Video> {
    return this.videoService.create(createVideoDto);
  }

  @Get()
  @ApiCreatedResponse({ type: VideoEntity, isArray: true })
  findAll(): Promise<Video[]> {
    return this.videoService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: VideoEntity })
  findOne(@Param('id') id: string): Promise<Video> {
    return this.videoService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: VideoEntity })
  update(
    @Param('id') id: string,
    @Body() updateVideoDto: UpdateVideoDto
  ): Promise<Video> {
    return this.videoService.update(id, updateVideoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Video> {
    return this.videoService.remove(id);
  }
}
