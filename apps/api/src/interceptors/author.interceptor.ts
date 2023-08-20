import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { created_by, updated_by } = request.body;

    if (user) {
      // Set the created_by and updated_by fields
      if (!created_by) {
        request.body.created_by = user.sub;
      }
      request.body.updated_by = user.sub;
    }

    return next.handle().pipe(
      tap(() => {
        // Additional logic after saving the entity
      })
    );
  }
}
