import { Controller, Get, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  constructor(
    private config: ConfigService,
    private readonly authSerivce: AuthService,
  ) {}

  @Get('kakao/login')
  kakaoLogin(@Res() res: Response) {
    const loginURL = this.authSerivce.getKakaoLoginURL();
    res.redirect(loginURL);
  }

  @Get('kakao/callback')
  async kakaoLoginCallback(@Query('code') code: string, @Res() res: Response) {
    const { accessToken, refreshToken } = await this.authSerivce.kakaoLoginOrRegister(code);

    res.cookie('BLISS_ATOKEN_V1', accessToken, { httpOnly: true, maxAge: 1000 * 60 * 3 });
    res.cookie('BLISS_RTOKEN_V1', refreshToken, { httpOnly: true, maxAge: 1000 * 60 * 10 });

    res.redirect('http://localhost:3000/auth');
  }

  @UseGuards(AuthGuard)
  @Post('logout')
  async logout(@Req() req: Request, @Res() res: Response) {
    this.authSerivce.logout(req['userId']);

    res.clearCookie(this.config.get('ACCESS_TOKEN_COOKIE_NAME'));
    res.clearCookie(this.config.get('REFRESH_TOKEN_COOKIE_NAME'));

    res.status(200).send({ message: '로그아웃 되었습니다.' });
  }
}
