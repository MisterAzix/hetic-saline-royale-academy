import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { getElementIds } from '../../helper/helper.controller';
import { UserCreateDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersEntity } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  /**
   * Create a new user.
   *
   * @param {UserCreateDto} userCreateDto - The data for creating the user.
   * @returns {Promise<User>} - The created user.
   */
  @Post()
  @ApiCreatedResponse({ type: UsersEntity })
  create(@Body() userCreateDto: UserCreateDto): Promise<User> {
    const courses = getElementIds(userCreateDto.courses);

    return this.usersService.createUser({
      ...userCreateDto,
      courses: { connect: courses },
    });
  }

  /**
   * Retrieve all users.
   *
   * @returns {Promise<User[]>} - An array of users.
   */
  @Get()
  @ApiOkResponse({ type: UsersEntity, isArray: true })
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  /**
   * Retrieve a specific user by ID.
   *
   * @param {string} id - The ID of the user to retrieve.
   * @returns {Promise<User>} - The user with the specified ID.
   */
  @Get(':id')
  @ApiOkResponse({ type: UsersEntity })
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne({ id });
  }

  /**
   * Update a user with new data.
   *
   * @param {string} id - The ID of the user to update.
   * @param {UpdateUserDto} updateUserDto - The data for updating the user.
   * @returns {Promise<User>} - The updated user.
   */
  @Patch(':id')
  @ApiOkResponse({ type: UsersEntity })
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<User> {
    const courses = getElementIds(updateUserDto.courses);

    return this.usersService.update(id, {
      ...updateUserDto,
      courses: { connect: courses },
    });
  }

  /**
   * Remove a user by ID.
   *
   * @param {string} id - The ID of the user to remove.
   * @returns {Promise<User>} - The removed user.
   */
  @Delete(':id')
  @ApiOkResponse({ type: UsersEntity })
  remove(@Param('id') id: string): Promise<User> {
    return this.usersService.remove(id);
  }
}
