import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

// 가드는 false를 반환하는 경우, 기본적으로 403 Forbidden 응답을 반환한다.
// 만약 401을 반환하고 싶은 경우, 해당 예외를 직접 던져야 한다.
@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    // 쿠키가 존재하는 경우 로그인된 것으로 간주
    if (request.cookies['login']) {
      return true;
    }

    // 쿠기가 없는 경우, body 확인
    if (!request.body.email || !request.body.password) {
      throw new UnauthorizedException('로그인이 필요합니다.');
    }

    const user = this.authService.validateUser(
      request.body.email,
      request.body.password,
    );

    if (!user) {
      return false;
    }

    request.user = user;

    return true;
  }
}

// local passport 전략을 사용하는 가드
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext) {
    // 부모 클래스인 AuthGuard('local')의 canActivate 메서드 호출
    // local 전략은 자동으로 LocalStrategy와 연결
    const result = (await super.canActivate(context)) as boolean;

    // passport의 login 메서드 실행
    // req.user가 존재하는 경우, 이를 Serialize하여 세션에 저장
    // 내부적으로 SessionSerializer 사용
    const request = context.switchToHttp().getRequest();
    await super.logIn(request);

    return result;
  }
}

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    return request.isAuthenticated();
  }
}
