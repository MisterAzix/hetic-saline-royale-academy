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
import { Ressource } from '@prisma/client';
import { AdminGuard } from '../admin.guard';
import { CreateRessourceDto } from './dto/create-ressource.dto';
import { UpdateRessourceDto } from './dto/update-ressource.dto';
import { RessourceEntity } from './entities/ressource.entity';
import { RessourceService } from './ressource.service';

@Controller('ressource')
@ApiTags('ressource')
export class RessourceController {
  constructor(private readonly ressourceService: RessourceService) {}

  /**
   * Create a new resource.
   *
   * @param {CreateRessourceDto} createRessourceDto - The data for creating the resource.
   * @returns {Promise<Ressource>} - The created resource.
   */
  @UseGuards(AdminGuard)
  @Post()
  @ApiCreatedResponse({ type: RessourceEntity })
  create(@Body() createRessourceDto: CreateRessourceDto): Promise<Ressource> {
    return this.ressourceService.create(createRessourceDto);
  }

  /**
   * Retrieve all resources.
   *
   * @returns {Promise<Ressource[]>} - An array of resources.
   */
  @UseGuards(AdminGuard)
  @Get()
  @ApiCreatedResponse({ type: RessourceEntity, isArray: true })
  findAll(): Promise<Ressource[]> {
    return this.ressourceService.findAll();
  }

  /**
   * Retrieve a specific resource by ID.
   *
   * @param {string} id - The ID of the resource to retrieve.
   * @returns {Promise<Ressource>} - The resource with the specified ID.
   */
  @UseGuards(AdminGuard)
  @Get(':id')
  @ApiCreatedResponse({ type: RessourceEntity })
  findOne(@Param('id') id: string): Promise<Ressource> {
    return this.ressourceService.findOne(id);
  }

  /**
   * Update a resource with new data.
   *
   * @param {string} id - The ID of the resource to update.
   * @param {UpdateRessourceDto} updateRessourceDto - The data for updating the resource.
   * @returns {Promise<Ressource>} - The updated resource.
   */
  @UseGuards(AdminGuard)
  @Patch(':id')
  @ApiCreatedResponse({ type: RessourceEntity })
  update(
    @Param('id') id: string,
    @Body() updateRessourceDto: UpdateRessourceDto
  ): Promise<Ressource> {
    return this.ressourceService.update(id, updateRessourceDto);
  }

  /**
   * Remove a resource by ID.
   *
   * @param {string} id - The ID of the resource to remove.
   * @returns {Promise<Ressource>} - The removed resource.
   */
  @UseGuards(AdminGuard)
  @Delete(':id')
  @ApiCreatedResponse({ type: RessourceEntity })
  remove(@Param('id') id: string): Promise<Ressource> {
    return this.ressourceService.remove(id);
  }
}
