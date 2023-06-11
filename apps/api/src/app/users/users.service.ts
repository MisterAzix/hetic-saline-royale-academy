import { Injectable } from '@nestjs/common';
import { Prisma, Users } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma.service';

const SALT_ROUND = 10;
@Injectable()
export class UsersService {
  //Injection des dépendances
  constructor(private prisma: PrismaService) {}

  async findOne(
    userWhereUniqueInput: Prisma.UsersWhereUniqueInput
  ): Promise<Users | null> {
    try {
      return await this.prisma.users.findUnique({
        where: userWhereUniqueInput,
      });
    } catch (error) {
      console.error('Error finding user:', error);
      throw new Error('Failed to find user.');
    }
  }

  async createUser(data: Prisma.UsersCreateInput): Promise<Users> {
    const cryptedPassword = await bcrypt.hash(data.password, SALT_ROUND);

    try {
      return await this.prisma.users.create({
        data: {
          ...data,
          password: cryptedPassword,
        },
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

  async findAll(): Promise<Users[]> {
    try {
      return await this.prisma.users.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      console.error('Error while retrieving users:', error);
      throw new Error('Failed to retrieve users.');
    }
  }

  async update(
    id: string,
    data: Prisma.AchievementUpdateInput
  ): Promise<Users> {
    try {
      return await this.prisma.users.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('User DTO validation error:', error.message);
        throw new Error('User DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        throw new Error('An error occurred while updating the user.');
      }
    }
  }

  async remove(id: string): Promise<Users> {
    try {
      return await this.prisma.users.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        console.error('User ID validation error:', error.message);
        throw new Error('User DTO validation error: ' + JSON.stringify(error));
      } else {
        // Handle other errors
        throw new Error('An error occurred while deleting user.');
      }
    }
  }
}
