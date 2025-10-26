import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    // 현재 실행되고 있는 핸들러에 붙은 Roles 데코레이터의 값을 가져옴
    const roles = this.reflector.get(Roles, context.getHandler());

    if (!roles) {
      return true;
    }

    // 권한 체크 로직
    // const http = context.switchToHttp();
    // const request = http.getRequest<Request>();

    // 가드는 기본적으로 403 Forbidden 응답을 반환함
    // 401 Unauthorized 응답을 반환하고 싶은 경우, 해당 예외를 직접 던져야 함
    return true;
  }
}
