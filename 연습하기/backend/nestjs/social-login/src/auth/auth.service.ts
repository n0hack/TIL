import { HttpService } from '@nestjs/axios';
import { ConflictException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import authConfig from 'config/auth.config';
import { firstValueFrom } from 'rxjs';
import { RedisService } from 'src/redis/redis.service';
import { AuthProvider } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

type KakaoToken = {
  token_type: 'bearer';
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
};

type KakaoUserInfo = {
  id: number;
  properties: {
    nickname: string;
    profile_image: string;
    thumbnail_image: string;
  };
};

export type JWTPayload = {
  userId: number;
};

@Injectable()
export class AuthService {
  constructor(
    @Inject(authConfig.KEY) private readonly config: ConfigType<typeof authConfig>,
    private readonly httpService: HttpService,
    private readonly jwtService: JwtService,
    private readonly redisService: RedisService,
    private readonly usersService: UsersService,
  ) {}
  /**
   * [LOCAL 로그인] 회원가입 함수
   */
  async registerUser(dto: RegisterUserDto) {
    const providerId = uuidV4();
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const isExist = await this.usersService.find({ email: dto.email });
    if (isExist) {
      throw new ConflictException('이미 존재하는 사용자입니다.');
    }
    const newUser = await this.usersService.create({
      ...dto,
      password: hashedPassword,
      providerId,
      provider: AuthProvider.LOCAL,
    });
    return newUser;
  }
  /**
   * [LOCAL 로그인] 로그인 함수
   */
  async loginUser(dto: LoginUserDto) {
    const user = await this.validateUser(dto);
    const payload: JWTPayload = { userId: user.id };
    return {
      user,
      backendTokens: {
        accessToken: await this.generateAccessToken(payload),
        refreshToken: await this.generateRefreshToken(payload),
      },
    };
  }
  /**
   * [LOCAL 로그인] 로그인 정보가 일치하는지 확인하는 함수
   */
  async validateUser(dto: LoginUserDto) {
    const user = await this.usersService.find({ email: dto.email });
    if (user && (await bcrypt.compare(dto.password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException('이메일 또는 비밀번호가 일치하지 않습니다.');
  }
  /**
   * URL에 쿼리스트링을 추가하는 함수
   */
  buildURLWithQueries(url: string, queries: Record<string, string>) {
    const q = Object.keys(queries)
      .reduce((p, k) => p + `&${k}=${encodeURIComponent(queries[k])}`, '')
      .slice(1);
    return `${url}?${q}`;
  }
  /**
   * 카카오 사용자 정보를 가져오는 함수
   * @param accessToken 카카오 액세스 토큰
   */
  async getKakaoUserInfo(accessToken: string) {
    const response = await firstValueFrom(
      this.httpService.get<KakaoUserInfo>('https://kapi.kakao.com/v2/user/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      }),
    );
    return response.data;
  }
  /**
   * [카카오 로그인] 1. 인가 코드 받기
   */
  getKakaoLoginURL() {
    return this.buildURLWithQueries('https://kauth.kakao.com/oauth/authorize', {
      client_id: this.config.kakao.clientID,
      redirect_uri: this.config.kakao.redirectURI,
      response_type: 'code',
    });
  }
  /**
   * [카카오 로그인] 2. 토큰 받기
   * @param code 인가 코드
   */
  async getKakaoToken(code: string) {
    const response = await firstValueFrom(
      this.httpService.post<KakaoToken>('https://kauth.kakao.com/oauth/token', null, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        params: {
          client_id: this.config.kakao.clientID,
          redirect_uri: this.config.kakao.redirectURI,
          client_secret: this.config.kakao.clientSecret,
          grant_type: 'authorization_code',
          code,
        },
      }),
    );
    return response.data;
  }
  /**
   * [카카오 로그인] 3. 사용자 로그인 처리
   * @param code 인가 코드
   */
  async kakaoLoginOrRegister(code: string) {
    const { access_token: kakaoAccessToken } = await this.getKakaoToken(code);
    const kakaoUserInfo = await this.getKakaoUserInfo(kakaoAccessToken);

    // 사용자 검증 및 회원가입 진행
    const blissUserInfo = await this.usersService.findUserOrCreate({
      nickname: kakaoUserInfo.properties.nickname,
      profileImage: kakaoUserInfo.properties.profile_image,
      provider: AuthProvider.KAKAO,
      providerId: kakaoUserInfo.id.toString(),
    });

    // JWT 토큰 발급
    const accessToken = await this.generateAccessToken({ userId: blissUserInfo.id });
    const refreshToken = await this.generateRefreshToken({ userId: blissUserInfo.id });

    return { accessToken, refreshToken };
  }
  /**
   * 액세스 토큰 생성하는 함수
   */
  async generateAccessToken(payload: JWTPayload) {
    return this.jwtService.signAsync(payload, {
      secret: this.config.jwt.accessTokenSecret,
      expiresIn: '1m',
    });
  }
  /**
   * 리프레시 토큰 생성하는 함수
   */
  async generateRefreshToken(payload: JWTPayload) {
    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: this.config.jwt.refreshTokenSecret,
      expiresIn: '10m',
    });
    this.saveRefreshToken(`refresh:${payload.userId}`, refreshToken);
    return refreshToken;
  }
  /**
   * 리프레시 토큰을 Redis에 저장하는 함수
   */
  async saveRefreshToken(key: string, refreshToken: string) {
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    await this.redisService.set(key, hashedRefreshToken, 60 * 10);
  }
  async varifyAccessToken(accessToken?: string) {
    if (!accessToken) throw new Error('REQUIRED_ACCESS_TOKEN');
    try {
      const payload = await this.jwtService.verifyAsync<JWTPayload>(accessToken, {
        secret: this.config.jwt.accessTokenSecret,
      });
      return {
        isValid: true,
        userId: payload.userId,
      };
    } catch (e) {
      throw new Error('INVALID_ACCESS_TOKEN');
    }
  }
  async varifyRefreshToken(refreshToken?: string) {
    if (!refreshToken) {
      throw new Error('REQUIRED_REFRESH_TOKEN');
    }
    try {
      const payload = await this.jwtService.verifyAsync<JWTPayload>(refreshToken, {
        secret: this.config.jwt.refreshTokenSecret,
      });
      const hashedRefreshToken = await this.redisService.get(`refresh:${payload.userId}`);
      const isMatch = await bcrypt.compare(refreshToken, hashedRefreshToken);
      return {
        isValid: isMatch,
        userId: payload.userId,
      };
    } catch (e) {
      throw new Error('INVALID_REFRESH_TOKEN');
    }
  }
  async logout(userId: number) {
    this.redisService.delete(`refresh:${userId}`);
  }

  async refreshToken(refreshToken?: string) {
    const { userId } = await this.varifyRefreshToken(refreshToken);
    const user = await this.usersService.find({ id: userId });
    const payload = { userId: user.id };

    return {
      user,
      backendTokens: {
        accessToken: await this.generateAccessToken(payload),
        refreshToken: await this.generateRefreshToken(payload),
      },
    };
  }
}
