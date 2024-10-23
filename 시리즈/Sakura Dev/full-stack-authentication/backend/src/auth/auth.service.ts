import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/types/jwt';

const EXPIRE_TIME = 20 * 1000;

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.validateUser(dto);
    const payload: JwtPayload = {
      username: user.email,
      sub: {
        name: user.name,
      },
    };

    return {
      user,
      backendTokens: {
        accessToken: await this.jwtService.sign(payload, {
          expiresIn: '20s',
          secret: process.env.JWT_SECRET,
        }),
        refreshToken: await this.jwtService.sign(payload, {
          expiresIn: '7d',
          secret: process.env.JWT_REFRESH,
        }),
        expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
      },
    };
  }

  async validateUser(dto: LoginDto) {
    const user = await this.userService.findByEmail(dto.username);

    if (user && (await argon.verify(user.password, dto.password))) {
      const { password, ...result } = user;
      return result;
    }

    throw new UnauthorizedException(
      '이메일 또는 비밀번호가 일치하지 않습니다.',
    );
  }

  async refreshToken(user: any) {
    const payload: JwtPayload = {
      username: user.username,
      sub: {
        name: user.sub.name,
      },
    };

    return {
      backendTokens: {
        accessToken: await this.jwtService.sign(payload, {
          expiresIn: '20s',
          secret: process.env.JWT_SECRET,
        }),
        refreshToken: await this.jwtService.sign(payload, {
          expiresIn: '7d',
          secret: process.env.JWT_REFRESH,
        }),
        expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
      },
    };
  }
}
