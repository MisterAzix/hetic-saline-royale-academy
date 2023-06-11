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
import { Ressource } from '@prisma/client';
import { CreateRessourceDto } from './dto/create-ressource.dto';
import { UpdateRessourceDto } from './dto/update-ressource.dto';
import { RessourceEntity } from './entities/ressource.entity';
import { RessourceService } from './ressource.service';

@Controller('ressource')
export class RessourceController {
  constructor(private readonly ressourceService: RessourceService) {}

  @Post()
  @ApiCreatedResponse({ type: RessourceEntity })
  create(@Body() createRessourceDto: CreateRessourceDto): Promise<Ressource> {
    return this.ressourceService.create(createRessourceDto);
  }

  @Get()
  @ApiCreatedResponse({ type: RessourceEntity, isArray: true })
  findAll(): Promise<Ressource[]> {
    return this.ressourceService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: RessourceEntity })
  findOne(@Param('id') id: string): Promise<Ressource> {
    return this.ressourceService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: RessourceEntity })
  update(
    @Param('id') id: string,
    @Body() updateRessourceDto: UpdateRessourceDto
  ): Promise<Ressource> {
    return this.ressourceService.update(id, updateRessourceDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: RessourceEntity })
  remove(@Param('id') id: string): Promise<Ressource> {
    return this.ressourceService.remove(id);
  }
}
