import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import authConfig from 'config/auth.config';
import { firstValueFrom } from 'rxjs';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(authConfig.KEY) private config: ConfigType<typeof authConfig>,
    private readonly jwtService: JwtService,
    private readonly httpService: HttpService,
    private readonly usersService: UsersService,
  ) {}

  private formUrlEncoded(x: Record<string, string>) {
    return Object.keys(x)
      .reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')
      .slice(1);
  }

  getKakaoAuthUrl() {
    const CLIENT_ID = this.config.kakao.client_id;
    const REDIRECT_URI = this.config.kakao.redirect_uri;
    const RESPONSE_TYPE = 'code';
    const REQUEST_URL = 'https://kauth.kakao.com/oauth/authorize';

    return `${REQUEST_URL}?${this.formUrlEncoded({
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      response_type: RESPONSE_TYPE,
    })}`;
  }

  async getKakaoUserInfo(code: string) {
    const GET_TOKEN_URL = '	https://kauth.kakao.com/oauth/token';
    const GET_USER_INFO_URL = 'https://kapi.kakao.com/v2/user/me';
    const GRANT_TYPE = 'authorization_code';
    const CLIENT_ID = this.config.kakao.client_id;
    const REDIRECT_URI = this.config.kakao.redirect_uri;
    const CLIENT_SECRET = this.config.kakao.client_secret;

    const requestBody = this.formUrlEncoded({
      grant_type: GRANT_TYPE,
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      code,
      client_secret: CLIENT_SECRET,
    });

    // 토큰 발급
    const { data } = await firstValueFrom(
      this.httpService.post(GET_TOKEN_URL, requestBody),
    );

    // 유저 정보 조회
    const { data: userInfo } = await firstValueFrom(
      this.httpService.get(GET_USER_INFO_URL, {
        headers: { Authorization: `Bearer ${data.access_token}` },
      }),
    );

    const user = await this.usersService.findOrCreateUser({
      socialId: userInfo.id.toString(),
      provider: 'kakao',
      nickname: userInfo.properties.nickname,
    });

    // JWT 생성
    const payload = { sub: user.id };
    const token = this.jwtService.sign(payload);

    return { user, token };
  }
}
