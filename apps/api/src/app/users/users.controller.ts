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
import { Users } from '@prisma/client';
import { UserCreateDto } from './dto/create-user.dto';
import { UsersEntity } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  @ApiCreatedResponse({ type: UsersEntity })
  create(@Body() userCreateDto: UserCreateDto): Promise<Users> {
    return this.usersService.createUser(userCreateDto);
  }
  @Get()
  @ApiOkResponse({ type: UsersEntity, isArray: true })
  findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: UsersEntity })
  findOne(@Param('id') id: string): Promise<Users> {
    return this.usersService.findOne({ id });
  }

  @Patch(':id')
  @ApiOkResponse({ type: UsersEntity })
  update(
    @Param('id') id: string,
    @Body() updateAchievementDto: UsersEntity
  ): Promise<Users> {
    return this.usersService.update(id, updateAchievementDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: UsersEntity })
  remove(@Param('id') id: string): Promise<Users> {
    return this.usersService.remove(id);
  }
}
