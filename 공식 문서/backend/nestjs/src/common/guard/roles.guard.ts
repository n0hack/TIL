import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Roles } from '../decorators/roles.decorator';
import { Request } from 'express';

interface User {
  roles: string;
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get(Roles, context.getHandler());

    // 요구하는 권한이 없다면, 모든 사용자가 접근 가능하다.
    if (!roles) {
      return true;
    }

    // 일반적인 프로세스를 가정하면, 사용자 정보는 요청 객체에 담겨있다.
    const request = context
      .switchToHttp()
      .getRequest<Request & { user: User }>();
    const user: User = request.user || { roles: 'admin' };

    return roles.includes(user.roles);
  }
}
