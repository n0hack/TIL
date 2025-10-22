import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    // 인증에 사용하는 기본 필드 변경 (username -> email)
    super({ usernameField: 'email' });
  }

  // 유저 정보 유효성 검증
  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(email, password);

    if (!user) {
      // 401 Unauthorized 반환
      return null;
    }

    return user;
  }
}
