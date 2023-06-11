import { Controller, Get } from '@nestjs/common';
import { Public } from '../decorators/public.decorator';

@Controller('users')
export class UsersController {
  @Public()
  @Get()
  sayHello(): string {
    return 'Hello, users!';
  }
}
