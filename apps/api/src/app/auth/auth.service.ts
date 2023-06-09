import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import { generateRandomPassword } from '../../helper/helper.services';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt'

//Cette classe implémenter la logique d'authentification
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  //Connexion
  async signIn(emailInput: string, pass: string) {
    const { password, firstName, lastName, id, email } =
      (await this.usersService.findOne({ email: emailInput })) ?? {};

    const isPasswordMatch = await bcrypt.compare(pass, password);

    if (!isPasswordMatch) throw new UnauthorizedException();
    const payload = {
      firstName,
      lastName,
      sub: id,
      email,
    };
    //Handle JWT jeton
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  //Google OAuth
  async findOrCreateUser(profile) {
    const {
      email_verified,
      email: userEmail,
      given_name: firstName,
      family_name: lastName,
    } = profile._json ?? {};

    if (!email_verified) {
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

    const access_token = await this.jwtService.signAsync(payload);

    return {
      access_token,
    };
  }
}
