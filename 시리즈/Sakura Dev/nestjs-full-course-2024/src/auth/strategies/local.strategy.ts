import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
    });
  }

  validate(email: string, password: string) {
    if (password === '') throw new UnauthorizedException('비밀번호를 입력해주세요.');
    return this.authService.validateUser(email, password);
  }
}
