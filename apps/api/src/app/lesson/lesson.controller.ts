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
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Masterclass } from '@prisma/client';
import { AdminGuard } from '../admin.guard';
import { CreateMasterclassDto } from './dto/create-masterclass.dto';
import { UpdateMasterclassDto } from './dto/update-lesson.dto';
import { MasterclassEntity } from './entities/lesson.entity';
import { MasterclassService } from './lesson.service';

@Controller('lesson')
@ApiTags('lesson')
export class MasterclassController {
  constructor(private readonly lessonService: MasterclassService) {}
  /**
   * Create a new lesson.
   *
   * @param {CreateMasterclassDto} createMasterclassDto - The data for creating the lesson.
   * @returns {Promise<Masterclass>} - The created lesson.
   */
  @UseGuards(AdminGuard)
  @Post()
  @ApiCreatedResponse({ type: MasterclassEntity })
  create(
    @Body() createMasterclassDto: CreateMasterclassDto
  ): Promise<Masterclass> {
    return this.lessonService.create({
      ...createMasterclassDto,
    });
  }

  /**
   * Retrieve all masterclasses.
   *
   * @returns {Promise<Masterclass[]>} - An array of masterclasses.
   */
  @UseGuards(AdminGuard)
  @Get()
  @ApiCreatedResponse({ type: MasterclassEntity, isArray: true })
  findAll(): Promise<Masterclass[]> {
    return this.lessonService.findAll();
  }

  /**
   * Retrieve a specific lesson by ID.
   *
   * @param {string} id - The ID of the lesson to retrieve.
   * @returns {Promise<Masterclass>} - The lesson with the specified ID.
   */
  @UseGuards(AdminGuard)
  @Get(':id')
  @ApiCreatedResponse({ type: MasterclassEntity })
  findOne(@Param('id') id: string): Promise<Masterclass> {
    return this.lessonService.findOne(id);
  }

  /**
   * Update a lesson with new data.
   *
   * @param {string} id - The ID of the lesson to update.
   * @param {UpdateMasterclassDto} updateMasterclassDto - The data for updating the lesson.
   * @returns {Promise<Masterclass>} - The updated lesson.
   */
  @UseGuards(AdminGuard)
  @Patch(':id')
  @ApiCreatedResponse({ type: MasterclassEntity })
  update(
    @Param('id') id: string,
    @Body() updateMasterclassDto: UpdateMasterclassDto
  ): Promise<Masterclass> {
    return this.lessonService.update(id, {
      ...updateMasterclassDto,
    });
  }

  /**
   * Remove a lesson by ID.
   *
   * @param {string} id - The ID of the lesson to remove.
   * @returns {Promise<Masterclass>} - The removed lesson.
   */
  @UseGuards(AdminGuard)
  @ApiCreatedResponse({ type: MasterclassEntity })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Masterclass> {
    return this.lessonService.remove(id);
  }
}
