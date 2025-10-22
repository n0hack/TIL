import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

/**
 * 가드는 false를 반환한 경우, 403 응답을 반환함
 */
@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    // 쿠키가 있는 경우 인증된 것
    if (request.cookies['login']) {
      return true;
    }

    // 쿠키가 없는 경우, body 확인
    if (!request.body.email || !request.body.password) {
      // false를 반환하면 403 응답을 반환하기에, 직접 401 응답
      throw new UnauthorizedException('로그인 정보가 없습니다.');
    }

    const user = await this.authService.validateUser(
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

// local 전략 사용
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // 부모 클래스인 AuthGuard('local')의 canActivate 메서드 실행
    // local이라는 이름은 LocalStrategy와 연결
    const result = (await super.canActivate(context)) as boolean;

    const request = context.switchToHttp().getRequest();
    // passport의 req.login 메서드 실행
    // req.user가 존재하는 경우, 이를 기반으로 세션에 정보 기록(Serialize)
    // 내부적으로 SessionSerializer 사용
    await super.logIn(request);

    return result;
  }
}

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    return request.isAuthenticated();
  }
}
