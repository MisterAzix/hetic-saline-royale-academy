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
import { Chapter } from '@prisma/client';
import { getElementIds } from '../../helper/helper.controller';
import { ChapterService } from './chapter.service';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';
import { ChapterEntity } from './entities/chapter.entity';

@Controller('chapter')
export class ChapterController {
  constructor(private readonly chapterService: ChapterService) {}

  @Post()
  @ApiCreatedResponse({ type: ChapterEntity })
  create(@Body() createChapterDto: CreateChapterDto): Promise<Chapter> {
    const lessons = getElementIds(createChapterDto.lessons);

    return this.chapterService.create({
      ...createChapterDto,
      lessons: { connect: lessons },
    });
  }

  @Get()
  @ApiCreatedResponse({ type: ChapterEntity, isArray: true })
  findAll(): Promise<Chapter[]> {
    return this.chapterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Chapter> {
    return this.chapterService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ChapterEntity })
  update(
    @Param('id') id: string,
    @Body() updateChapterDto: UpdateChapterDto
  ): Promise<Chapter> {
    const lessons = getElementIds(updateChapterDto.lessons);

    return this.chapterService.update(id, {
      ...updateChapterDto,
      lessons: { connect: lessons },
    });
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: ChapterEntity })
  remove(@Param('id') id: string): Promise<Chapter> {
    return this.chapterService.remove(id);
  }
}
