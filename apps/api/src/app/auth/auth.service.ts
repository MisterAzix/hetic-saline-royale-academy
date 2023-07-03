import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { generateRandomPassword } from '../../helper/helper.services';
import { UsersService } from '../users/users.service';

//Cette classe implémenter la logique d'authentification
@Injectable()
export class AuthService {
  private logger = new Logger(AuthService.name);

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  /**
   * Sign in a user.
   *
   * @param {string} emailInput - The user's email.
   * @param {string} pass - The user's password.
   * @returns {Promise<{ access_token: string }>} - The access token for the authenticated user.
   * @throws {UnauthorizedException} - If the provided password does not match the user's password.
   */
  async signIn(
    emailInput: string,
    pass: string
  ): Promise<{ access_token: string }> {
    const { password, firstName, lastName, id, email } =
      (await this.usersService.findOne({ email: emailInput })) ?? {};

    if (!email || !password) {
      this.logger.error('User login failed. Incorrect email or password.');
      throw new UnauthorizedException(
        'User login failed. Incorrect email or password.'
      );
    }
    const isPasswordMatch = await bcrypt.compare(pass, password);

    if (!isPasswordMatch) {
      this.logger.error('User login failed. Incorrect password.');
      throw new UnauthorizedException('User login failed. Incorrect password.');
    }

    const payload = {
      firstName,
      lastName,
      sub: id,
      email,
    };
    this.logger.log(`User login successfully : ${id}`);

    //Handle JWT jeton
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  /**
   * Find or create a user based on the google OAUth provided profile.
   *
   * @param {Object} profile - The user's profile obtained from the OAuth provider.
   * @returns {Promise<{ access_token: string }>} - The access token for the authenticated user.
   * @throws {Error} - If the email is not verified.
   */
  async findOrCreateUser(profile): Promise<{ access_token: string }> {
    const {
      email_verified,
      email: userEmail,
      given_name: firstName,
      family_name: lastName,
    } = profile._json ?? {};

    if (!email_verified) {
      this.logger.error('Email is not verified.');
      throw new Error('Email is not verified');
    }

    const existingUser = await this.usersService.findOne({ email: userEmail });

    if (existingUser) {
      return this.signIn(existingUser.email, existingUser.password);
    }

    const oAuthUserPwd = generateRandomPassword(12); // Generate a secure password

    const userData: Prisma.UserCreateInput = {
      email: userEmail,
      firstName,
      lastName,
      password: oAuthUserPwd,
    };

    const createdUser = await this.usersService.createUser(userData);

    const payload = {
      firstName: createdUser.firstName,
      lastName: createdUser.lastName,
      sub: createdUser.id,
      email: createdUser.email,
    };
    this.logger.log(`User login from google OAuth : ${createdUser.id}`);

    const access_token = await this.jwtService.signAsync(payload);

    return {
      access_token,
    };
  }
}
