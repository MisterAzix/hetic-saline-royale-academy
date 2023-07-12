import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@prisma/client';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const userRole = request.user.role;

    const isAdmin = this.checkAdminRole(userRole);

    if (!isAdmin) {
      throw new ForbiddenException(
        `User need ADMIN role to execute this action`
      );
    }

    return isAdmin;
  }

  private checkAdminRole(userRole: Role): boolean {
    return userRole === Role.ADMIN;
  }
}
