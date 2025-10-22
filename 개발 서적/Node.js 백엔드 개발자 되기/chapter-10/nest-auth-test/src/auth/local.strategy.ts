import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    // 인증 시 사용하는 필드가 username이 기본이기에, email로 변경
    super({ usernameField: 'email' });
  }

  // 유저 정보 유효성 검증
  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(email, password);

    if (!user) {
      // 401
      return null;
    }

    return user;
  }
}
