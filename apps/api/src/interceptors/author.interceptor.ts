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
    const { createdBy, lastUpdatedBy } = request.body;

    if (user) {
      // Set the createdBy and lastUpdatedBy fields
      if (!createdBy) {
        request.body.createdBy = user.sub;
      }
      request.body.lastUpdatedBy = user.sub;
    }

    return next.handle().pipe(
      tap(() => {
        // Additional logic after saving the entity
      })
    );
  }
}
