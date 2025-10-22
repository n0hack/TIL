import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      // 콜백의 매개변수로 Token과 Profile이 전달됨
      callbackURL: 'http://localhost:3000/auth/google',
      scope: ['email', 'profile'],
      skipUserProfile: false,
    });
  }

  // OAuth 인증 후 콜백으로 실행되는 메서드
  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const { id, name, emails } = profile;

    // Google이라는 Provider 안에서 고유한 값
    const providerId = id;
    const email = emails?.[0].value || '';
    const username = (name?.familyName ?? '') + (name?.givenName ?? '');

    const user = await this.userService.findByEmailOrService(
      email,
      username,
      providerId,
    );

    return user;
  }
}
