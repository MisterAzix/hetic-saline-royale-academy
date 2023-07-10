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
import {
  ApiCreatedResponse,
  ApiExcludeEndpoint,
  ApiTags,
} from '@nestjs/swagger';
import { User as UserModel } from '@prisma/client';
import { Public } from '../decorators/public.decorator';
import { UserCreateDto } from '../users/dto/create-user.dto';
import { UserSignDto } from '../users/dto/signin-user.dto';
import { UsersEntity } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';

@Controller('auth')
@ApiTags('authentification')
export class AuthController {
  //Dependency Injection
  constructor(
    private authService: AuthService,
    private userService: UsersService
  ) {}

  /**
   * Sign in with email and password.
   *
   * @param {UserSignDto} signInDto - The DTO containing the sign-in data.
   * @returns {Promise<UsersEntity>} - The signed-in user entity.
   */
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login') // http://localhost:3000/api/auth/login
  @ApiCreatedResponse({ type: UsersEntity })
  signIn(@Body() signInDto: UserSignDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  /**
   * Perform Google OAuth authentication.
   * This endpoint is excluded from the API documentation.
   *
   * @returns {Promise<void>} - No return value.
   */
  @ApiExcludeEndpoint()
  @Public()
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    /*  */
  }

  /**
   * Handle the callback after successful Google OAuth authentication.
   * This endpoint is excluded from the API documentation.
   *
   * @param {Request} req - The request object.
   * @returns {Promise<object>} - The user information.
   */
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

  /**
   * Sign up a new user.
   *
   * @param {UserCreateDto} userData - The DTO containing the user data.
   * @returns {Promise<UserModel>} - The created user.
   */
  @Public()
  @Post('signup')
  @ApiCreatedResponse({ type: UsersEntity })
  async signupUser(@Body() userData: UserCreateDto): Promise<UserModel> {
    return this.userService.createUser({
      ...userData,
    });
  }
}
