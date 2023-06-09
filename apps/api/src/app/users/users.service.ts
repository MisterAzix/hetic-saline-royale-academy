import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../../prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  //Injection des dépendances
  constructor(private prisma: PrismaService) {}

  async findOne(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.prisma.user.findUnique({
        where: userWhereUniqueInput,
      });
    } catch (error) {
      console.error('Error finding user:', error);
      throw new Error('Failed to find user.');
    }
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    const cryptedPassword = await bcrypt.hash(data.password, 10);

    data.password = cryptedPassword;
    try {
      return await this.prisma.user.create({
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('Validation error:', error.message);
        throw new Error('Invalid user data.');
      }
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // Handle the unique constraint violation for email
        if (error.code === 'P2002') {
          console.log(
            'There is a unique constraint violation, a new user cannot be created with this email'
          );
        }
        throw new Error('Unique email constraint violation');
      }
      // Handle unknown errors
      console.error('Error creating user:', error);
      throw new Error('Failed to create user.');
    }
  }
}
