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
import { Category } from '@prisma/client';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from './entities/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  /**
   * Create a new category.
   *
   * @param {CreateCategoryDto} createCategoryDto - The DTO containing the category data.
   * @returns {Promise<Category>} - The created category.
   */
  @Post()
  @ApiCreatedResponse({ type: CategoryEntity })
  create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryService.create(createCategoryDto);
  }

  /**
   * Retrieve all categories.
   *
   * @returns {Promise<Category[]>} - An array of categories.
   */
  @Get()
  @ApiCreatedResponse({ type: CategoryEntity, isArray: true })
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  /**
   * Retrieve a specific category by ID.
   *
   * @param {string} id - The ID of the category to retrieve.
   * @returns {Promise<Category>} - The category with the specified ID.
   */
  @Get(':id')
  @ApiCreatedResponse({ type: CategoryEntity })
  findOne(@Param('id') id: string): Promise<Category> {
    return this.categoryService.findOne(id);
  }

  /**
   * Update a category with new data.
   *
   * @param {string} id - The ID of the category to update.
   * @param {UpdateCategoryDto} updateCategoryDto - The DTO containing the updated category data.
   * @returns {Promise<Category>} - The updated category.
   */
  @Patch(':id')
  @ApiCreatedResponse({ type: CategoryEntity })
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto
  ): Promise<Category> {
    return this.categoryService.update(id, updateCategoryDto);
  }

  /**
   * Remove a category.
   *
   * @param {string} id - The ID of the category to remove.
   * @returns {Promise<Category>} - The removed category.
   */
  @Delete(':id')
  @ApiCreatedResponse({ type: CategoryEntity })
  remove(@Param('id') id: string): Promise<Category> {
    return this.categoryService.remove(id);
  }
}
