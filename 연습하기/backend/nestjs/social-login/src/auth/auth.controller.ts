import { Body, Controller, Get, Post, Query, Req, Res, UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private config: ConfigService,
    private readonly authSerivce: AuthService,
  ) {}

  // @Post('register')
  // async registerUser(@Body() dto: RegisterUserDto) {
  //   await this.authSerivce.registerUser(dto);
  //   return await this.authSerivce.loginUser({ email: dto.email, password: dto.password });
  // }

  // @Post('login')
  // async loginUser(@Body() dto: LoginUserDto) {
  //   return await this.authSerivce.loginUser(dto);
  // }

  // @Post('refresh')
  // async refreshToken(@Req() req: Request) {
  //   const [type, token] = req.headers['authorization']?.split(' ') ?? [];
  //   if (type !== 'Refresh') {
  //     throw new UnauthorizedException('리프레시 토큰이 필요합니다.');
  //   }

  //   try {
  //     return await this.authSerivce.refreshToken(token);
  //   } catch {
  //     throw new UnauthorizedException('유효하지 않은 토큰입니다.');
  //   }
  // }

  // @Get('kakao/login')
  // kakaoLogin(@Res() res: Response) {
  //   const loginURL = this.authSerivce.getKakaoLoginURL();
  //   res.redirect(loginURL);
  // }

  @Post('kakao')
  async KakaoLogin(@Query('code') code: string, @Res() res: Response) {
    const { accessToken, refreshToken } = await this.authSerivce.kakaoLoginOrRegister(code);

    res.cookie('BLISS_ATOKEN_V1', accessToken, { httpOnly: true, maxAge: 1000 * 60 * 3 });
    res.cookie('BLISS_RTOKEN_V1', refreshToken, { httpOnly: true, maxAge: 1000 * 60 * 10 });

    res.status(200).send({
      message: '로그인 되었습니다.',
      accessToken,
      refreshToken,
    });
  }

  @Get('kakao/callback')
  async kakaoLoginCallback(@Query('code') code: string, @Res() res: Response) {
    const { accessToken, refreshToken } = await this.authSerivce.kakaoLoginOrRegister(code);
    res.cookie('BLISS_ATOKEN_V1', accessToken, { httpOnly: true, maxAge: 1000 * 60 * 3 });
    res.cookie('BLISS_RTOKEN_V1', refreshToken, { httpOnly: true, maxAge: 1000 * 60 * 10 });
    res.redirect('http://localhost:3000/auth');
  }

  @Post('logout')
  async logout(@Res() res: Response) {
    res.clearCookie(this.config.get('ACCESS_TOKEN_COOKIE_NAME'));
    res.clearCookie(this.config.get('REFRESH_TOKEN_COOKIE_NAME'));
    res.status(200).send({ message: '로그아웃 되었습니다.' });
  }

  @Post('refresh')
  async refresh(@Req() req: Request, @Res() res: Response) {
    const [type, token] = req.headers['authorization']?.split(' ') ?? [];

    if (type !== 'Refresh') {
      throw new UnauthorizedException('리프레시 토큰이 필요합니다.');
    }

    try {
      const { userId } = await this.authSerivce.varifyRefreshToken(token);
      const newAccessToken = await this.authSerivce.generateAccessToken({ userId });
      const newRefreshToken = await this.authSerivce.generateRefreshToken({ userId });

      res.cookie('BLISS_ATOKEN_V1', newAccessToken, { httpOnly: true, maxAge: 1000 * 60 * 3 });
      res.cookie('BLISS_RTOKEN_V1', 'sibal', { httpOnly: true, maxAge: 1000 * 60 * 10 });

      res.status(200).send({
        message: '토큰이 갱신되었습니다.',
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      });
    } catch (e) {
      res.clearCookie(this.config.get('ACCESS_TOKEN_COOKIE_NAME'));
      res.clearCookie(this.config.get('REFRESH_TOKEN_COOKIE_NAME'));

      res.status(401).send({ message: '리프레시 토큰 만료' });
    }
  }
}
