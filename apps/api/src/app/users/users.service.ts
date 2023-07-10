import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma.service';

const SALT_ROUND = 10;
@Injectable()
export class UsersService {
  private logger = new Logger(UsersService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Retrieve a specific user by unique input.
   *
   * @param {Prisma.UserWhereUniqueInput} userWhereUniqueInput - The unique input to identify the user.
   * @returns {Promise<User | null>} - The user found, or null if not found.
   */
  async findOne(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.prisma.user.findUnique({
        where: userWhereUniqueInput,
      });
    } catch (error) {
      this.logger.error('Error finding user:', error);
      throw new InternalServerErrorException(`Failed to find user: ${error}`);
    }
  }

  /**
   * Create a new user.
   *
   * @param {Prisma.UserCreateInput} data - The data for creating the user.
   * @returns {Promise<User>} - The created user.
   */
  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    if (!data.password) {
      this.logger.error('Password is null or undefined');
      throw new BadRequestException('Password is null or undefined');
    }
    const cryptedPassword = await bcrypt.hash(data.password, SALT_ROUND);
    try {
      return await this.prisma.user.create({
        data: {
          ...data,
          password: cryptedPassword,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('Validation error:', error.message);
        throw new BadRequestException(`Invalid user data: ${error}`);
      }
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // Handle the unique constraint violation for email
        if (error.code === 'P2002') {
          this.logger.log(
            'There is a unique constraint violation, a new user cannot be created with this email'
          );
        }
        throw new BadRequestException('Unique email constraint violation');
      }
      // Handle unknown errors
      this.logger.error('Error creating user:', error);
      throw new InternalServerErrorException(`Failed to create user: ${error}`);
    }
  }

  /**
   * Retrieve all users.
   *
   * @returns {Promise<User[]>} - An array of users.
   */
  async findAll(): Promise<User[]> {
    try {
      return await this.prisma.user.findMany({
        where: { deleted: false },
      });
    } catch (error) {
      this.logger.error('Error while retrieving users:', error);
      throw new InternalServerErrorException(
        `Failed to retrieve users: ${error}`
      );
    }
  }

  /**
   * Update a user with new data.
   *
   * @param {string} id - The ID of the user to update.
   * @param {Prisma.UserUpdateInput} data - The data for updating the user.
   * @returns {Promise<User>} - The updated user.
   */
  async update(id: string, data: Prisma.UserUpdateInput): Promise<User> {
    try {
      return await this.prisma.user.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('User DTO validation error:', error.message);
        throw new BadRequestException(`User DTO validation error: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while updating the user:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while updating the user: ${error}`
        );
      }
    }
  }

  /**
   * Remove a user by ID.
   *
   * @param {string} id - The ID of the user to remove.
   * @returns {Promise<User>} - The removed user.
   */
  async remove(id: string): Promise<User> {
    try {
      return await this.prisma.user.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Handle validation errors
        this.logger.error('User ID validation error:', error.message);
        throw new BadRequestException(`User DTO validation error: ${error}`);
      } else {
        // Handle other errors
        this.logger.error(
          'An error occurred while deleting user:',
          error.message
        );
        throw new InternalServerErrorException(
          `An error occurred while deleting user: ${error}`
        );
      }
    }
  }
}
