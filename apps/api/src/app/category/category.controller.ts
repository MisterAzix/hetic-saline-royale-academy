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
import { Category } from '@prisma/client';
import { AdminGuard } from '../admin.guard';
import { CreatedBy } from '../decorators/created-by.decorator';
import { UpdatedBy } from '../decorators/last-updated-by.decorator';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from './entities/category.entity';

@Controller('category')
@ApiTags('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  /**
   * Create a new category.
   *
   * @param {CreateCategoryDto} createCategoryDto - The DTO containing the category data.
   * @returns {Promise<Category>} - The created category.
   */
  @UseGuards(AdminGuard)
  @Post()
  @ApiCreatedResponse({ type: CategoryEntity })
  create(
    @Body() createCategoryDto: CreateCategoryDto,
    @CreatedBy() created_by: string,
    @UpdatedBy() updated_by: string
  ): Promise<Category> {
    return this.categoryService.create({
      ...createCategoryDto,
      created_by,
      updated_by,
    });
  }

  /**
   * Retrieve all categories.
   *
   * @returns {Promise<Category[]>} - An array of categories.
   */
  @UseGuards(AdminGuard)
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
  @UseGuards(AdminGuard)
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
  @UseGuards(AdminGuard)
  @Patch(':id')
  @ApiCreatedResponse({ type: CategoryEntity })
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
    @UpdatedBy() updated_by: string
  ): Promise<Category> {
    return this.categoryService.update(id, {
      ...updateCategoryDto,
      updated_by,
    });
  }

  /**
   * Remove a category.
   *
   * @param {string} id - The ID of the category to remove.
   * @returns {Promise<Category>} - The removed category.
   */
  @UseGuards(AdminGuard)
  @Delete(':id')
  @ApiCreatedResponse({ type: CategoryEntity })
  remove(@Param('id') id: string): Promise<Category> {
    return this.categoryService.remove(id);
  }
}
