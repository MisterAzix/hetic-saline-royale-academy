import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Masterclass } from '@prisma/client';
import { AdminGuard } from '../admin.guard';
import { UpdateMasterclassDto } from './dto/update-masterclass.dto';
import { MasterclassEntity } from './entities/masterclass.entity';
import { MasterclassService } from './masterclass.service';

@Controller('masterclass')
@ApiTags('masterclass')
export class MasterclassController {
  constructor(private readonly masterclassService: MasterclassService) {}
  /**
   * Create a new masterclass.
   *
   * @returns {Promise<Masterclass>} - The created masterclass.
   */
  @UseGuards(AdminGuard)
  @Post('upload')
  @ApiCreatedResponse({ type: MasterclassEntity })
  @UseInterceptors(FileInterceptor('video'))
  create(@UploadedFile() file: Express.Multer.File): Promise<Masterclass> {
    return this.masterclassService.create(file);
  }

  /**
   * Retrieve all masterclasses.
   *
   * @returns {Promise<Masterclass[]>} - An array of masterclasses.
   */
  @UseGuards(AdminGuard)
  @Get()
  @ApiOkResponse({ type: MasterclassEntity, isArray: true })
  findAll(): Promise<Masterclass[]> {
    return this.masterclassService.findAll();
  }

  /**
   * Retrieve a specific masterclass by ID.
   *
   * @param {string} id - The ID of the masterclass to retrieve.
   * @returns {Promise<Masterclass>} - The masterclass with the specified ID.
   */
  @UseGuards(AdminGuard)
  @Get(':id')
  @ApiOkResponse({ type: MasterclassEntity })
  findOne(@Param('id') id: string): Promise<Masterclass> {
    return this.masterclassService.findOne(id);
  }

  /**
   * Update a masterclass with new data.
   *
   * @param {string} id - The ID of the masterclass to update.
   * @param {UpdateMasterclassDto} updateMasterclassDto - The data for updating the masterclass.
   * @returns {Promise<Masterclass>} - The updated masterclass.
   */
  @UseGuards(AdminGuard)
  @Patch(':id')
  @ApiOkResponse({ type: MasterclassEntity })
  update(
    @Param('id') id: string,
    @Body() updateMasterclassDto: UpdateMasterclassDto
  ): Promise<Masterclass> {
    return this.masterclassService.update(id, {
      ...updateMasterclassDto,
    });
  }

  /**
   * Remove a masterclass by ID.
   *
   * @param {string} id - The ID of the masterclass to remove.
   * @returns {Promise<Masterclass>} - The removed masterclass.
   */
  @UseGuards(AdminGuard)
  @ApiOkResponse({ type: MasterclassEntity })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Masterclass> {
    return this.masterclassService.remove(id);
  }
}
