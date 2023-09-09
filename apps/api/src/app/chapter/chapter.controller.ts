import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Chapter } from '@prisma/client';
import { AdminGuard } from '../admin.guard';
import { ChapterService } from './chapter.service';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';
import { ChapterEntity } from './entities/chapter.entity';

@Controller('chapter')
@ApiTags('chapter')
export class ChapterController {
  constructor(private readonly chapterService: ChapterService) {}

  /**
   * Create a new chapter.
   *
   * @param {CreateChapterDto} createChapterDto - The data for creating the chapter.
   * @returns {Promise<Chapter>} - The created chapter.
   */
  @UseGuards(AdminGuard)
  @Post()
  @ApiOkResponse({ type: ChapterEntity })
  create(@Body() createChapterDto: CreateChapterDto): Promise<Chapter> {
    return this.chapterService.create(createChapterDto);
  }

  /**
   * Retrieve all chapters.
   *
   * @returns {Promise<Chapter[]>} - An array of chapters.
   */
  @UseGuards(AdminGuard)
  @Get()
  @ApiOkResponse({ type: ChapterEntity, isArray: true })
  findAll(): Promise<Chapter[]> {
    return this.chapterService.findAll();
  }

  /**
   * Retrieve a specific chapter by ID.
   *
   * @param {string} id - The ID of the chapter to retrieve.
   * @returns {Promise<Chapter>} - The chapter with the specified ID.
   */
  @UseGuards(AdminGuard)
  @Get(':id')
  @ApiOkResponse({ type: ChapterEntity })
  findOne(@Param('id') id: string): Promise<Chapter> {
    return this.chapterService.findOne(id);
  }

  /**
   * Update a chapter with new data.
   *
   * @param {string} id - The ID of the chapter to update.
   * @param {UpdateChapterDto} updateChapterDto - The data for updating the chapter.
   * @returns {Promise<Chapter>} - The updated chapter.
   */
  @UseGuards(AdminGuard)
  @Patch(':id')
  @ApiOkResponse({ type: ChapterEntity })
  update(
    @Param('id') id: string,
    @Body() updateChapterDto: UpdateChapterDto
  ): Promise<Chapter> {
    return this.chapterService.update(id, updateChapterDto);
  }

  /**
   * Remove a chapter by ID.
   *
   * @param {string} id - The ID of the chapter to remove.
   * @returns {Promise<Chapter>} - The removed chapter.
   */
  @UseGuards(AdminGuard)
  @Delete(':id')
  @ApiOkResponse({ type: ChapterEntity })
  remove(@Param('id') id: string): Promise<Chapter> {
    return this.chapterService.remove(id);
  }
}
