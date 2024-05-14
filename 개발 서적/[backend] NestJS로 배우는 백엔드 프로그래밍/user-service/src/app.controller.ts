import {
  CanActivate,
  Controller,
  ExecutionContext,
  Get,
  Injectable,
  UseGuards,
  createParamDecorator,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    request.user = {
      name: 'Lucid',
      email: 'test@naver.com',
    };

    return true;
  }
}

interface User {
  name: string;
  email: string;
}

const User = createParamDecorator((data: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const user = request.user;

  return data ? user[data] : user;
});

@Controller()
export class AppController {
  @UseGuards(AuthGuard)
  @Get()
  getHello(@User() user) {
    console.log(user);
    return 'Hello World!';
  }
}
