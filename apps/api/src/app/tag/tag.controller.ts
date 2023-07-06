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
import { Tag } from '@prisma/client';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { TagEntity } from './entities/tag.entity';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  /**
   * Create a new tag.
   *
   * @param {CreateTagDto} createTagDto - The data for creating the tag.
   * @returns {Promise<Tag>} - The created tag.
   */
  @Post()
  @ApiCreatedResponse({ type: TagEntity })
  create(@Body() createTagDto: CreateTagDto): Promise<Tag> {
    return this.tagService.create(createTagDto);
  }

  /**
   * Retrieve all tags.
   *
   * @returns {Promise<Tag[]>} - An array of tags.
   */
  @Get()
  @ApiCreatedResponse({ type: TagEntity, isArray: true })
  findAll(): Promise<Tag[]> {
    return this.tagService.findAll();
  }

  /**
   * Retrieve a specific tag by ID.
   *
   * @param {string} id - The ID of the tag to retrieve.
   * @returns {Promise<Tag>} - The tag with the specified ID.
   */
  @Get(':id')
  @ApiCreatedResponse({ type: TagEntity })
  findOne(@Param('id') id: string): Promise<Tag> {
    return this.tagService.findOne(id);
  }

  /**
   * Update a tag with new data.
   *
   * @param {string} id - The ID of the tag to update.
   * @param {UpdateTagDto} updateTagDto - The data for updating the tag.
   * @returns {Promise<Tag>} - The updated tag.
   */
  @Patch(':id')
  @ApiCreatedResponse({ type: TagEntity })
  update(
    @Param('id') id: string,
    @Body() updateTagDto: UpdateTagDto
  ): Promise<Tag> {
    return this.tagService.update(id, updateTagDto);
  }

  /**
   * Remove a tag by ID.
   *
   * @param {string} id - The ID of the tag to remove.
   * @returns {Promise<Tag>} - The removed tag.
   */
  @Delete(':id')
  @ApiCreatedResponse({ type: TagEntity })
  remove(@Param('id') id: string): Promise<Tag> {
    return this.tagService.remove(id);
  }
}
