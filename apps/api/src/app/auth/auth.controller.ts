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
import { Prisma, Users as UserModel } from '@prisma/client';
import { Public } from '../decorators/public.decorator';
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
  @Public()
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    /*  */
  }

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
  async signupUser(
    @Body() userData: Prisma.UsersCreateInput
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
