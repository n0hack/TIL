import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import authConfig from 'config/auth.config';
import { firstValueFrom } from 'rxjs';
import { User } from 'src/users/user.entity';
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
    const AUTHORIZE_URL = 'https://kauth.kakao.com/oauth/authorize';

    return `${AUTHORIZE_URL}?${this.formUrlEncoded({
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      response_type: RESPONSE_TYPE,
    })}`;
  }

  async getKakaoUser(token: string): Promise<any> {
    const url = 'https://kapi.kakao.com/v2/user/me';
    const headers = { Authorization: `Bearer ${token}` };
    const { data } = await firstValueFrom(
      this.httpService.get(url, { headers }),
    );
    return data;
  }

  async authenticateKakaoUser(code: string) {
    const tokenData = await this.getKakaoToken(code);
    const userInfo = await this.getKakaoUser(tokenData.access_token);
    return this.usersService.validateUser({
      socialId: userInfo.id.toString(),
      provider: 'kakao',
      nickname: userInfo.properties.nickname,
    });
  }

  async getKakaoToken(code: string) {
    const GET_TOKEN_URL = '	https://kauth.kakao.com/oauth/token';
    const GRANT_TYPE = 'authorization_code';
    const CLIENT_ID = this.config.kakao.client_id;
    const REDIRECT_URI = this.config.kakao.redirect_uri;
    const CLIENT_SECRET = this.config.kakao.client_secret;

    const params = this.formUrlEncoded({
      grant_type: GRANT_TYPE,
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      code,
      client_secret: CLIENT_SECRET,
    });

    // 토큰 발급
    const { data: tokenData } = await firstValueFrom(
      this.httpService.post(GET_TOKEN_URL, params),
    );

    return tokenData;
  }

  async login(user: User) {
    const payload = { sub: user.id, nickname: user.nickname };
    return {
      access_token: this.jwtService.sign(payload, { expiresIn: '5m' }),
      refresh_token: this.jwtService.sign(payload, { expiresIn: '7d' }),
    };
  }
}
