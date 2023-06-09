import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { Users as UserModel } from '@prisma/client';
import { Public } from '../decorators/public.decorator';
import { UserCreateDto } from '../users/dto/create-user.dto';
import { UserSignDto } from '../users/dto/signin-user.dto';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  //Dependency Injection
  constructor(
    private authService: AuthService,
    private userService: UsersService
  ) {}

  //Local login
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login') // http://localhost:3000/api/auth/login
  signIn(@Body() signInDto: UserSignDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  //Google OAuth
  @ApiExcludeEndpoint()
  @Public()
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    /*  */
  }

  @ApiExcludeEndpoint()
  @Public()
  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthCallback(@Req() req) {
    const user = req.user;
    return {
      message: 'User information retrieved successfully',
      user,
    };
  }

  @Public()
  @Post('signup')
  async signupUser(@Body() userData: UserCreateDto): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
