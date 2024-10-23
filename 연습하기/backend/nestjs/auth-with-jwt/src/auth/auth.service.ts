import { ConflictException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/types/jwt';
import jwtAccessConfig from './config/jwt-access.config';
import jwtRefreshConfig from './config/jwt-refresh.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    @Inject(jwtAccessConfig.KEY) private readonly jwtAccessTokenConfig: ConfigType<typeof jwtAccessConfig>,
    @Inject(jwtRefreshConfig.KEY) private readonly jwtRefreshTokenConfig: ConfigType<typeof jwtRefreshConfig>,
  ) {}

  async register(dto: RegisterUserDto) {
    if (await this.userService.findByEmail(dto.email)) {
      throw new ConflictException('이미 존재하는 사용자입니다.');
    }
    const newUser = await this.userService.create(dto);
    const { password, ...result } = newUser;

    return result;
  }

  async login(dto: LoginUserDto) {
    const user = await this.userService.findByEmail(dto.email);

    if (!user || !(await argon2.verify(user.password, dto.password))) {
      throw new UnauthorizedException('이메일 또는 비밀번호가 올바르지 않습니다.');
    }

    const { password, ...userWithoutPassword } = user;
    const payload: JwtPayload = {
      email: user.email,
      sub: {
        id: user.id,
      },
    };
    const { accessToken, refreshToken } = await this.generateTokens(payload);

    return {
      user: userWithoutPassword,
      backendTokens: {
        accessToken,
        refreshToken,
      },
    };
  }

  async refresh(payload: JwtPayload) {
    return this.generateTokens({ email: payload.email, sub: payload.sub });
  }

  private async generateTokens(payload: JwtPayload) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, this.jwtAccessTokenConfig),
      this.jwtService.signAsync(payload, this.jwtRefreshTokenConfig),
    ]);

    return { accessToken, refreshToken };
  }
}
