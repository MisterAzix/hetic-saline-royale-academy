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

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  @ApiCreatedResponse({ type: UsersEntity })
  create(@Body() userCreateDto: UserCreateDto): Promise<User> {
    const courses = getElementIds(userCreateDto.courses);

    return this.usersService.createUser({
      ...userCreateDto,
      courses: { connect: courses },
    });
  }
  @Get()
  @ApiOkResponse({ type: UsersEntity, isArray: true })
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: UsersEntity })
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne({ id });
  }

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

  @Delete(':id')
  @ApiOkResponse({ type: UsersEntity })
  remove(@Param('id') id: string): Promise<User> {
    return this.usersService.remove(id);
  }
}
