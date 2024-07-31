import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authSerivce: AuthService) {}

  @Get('kakao/login')
  kakaoLogin(@Res() res: Response) {
    const url = this.authSerivce.getKakaoAuthUrl();
    res.redirect(url);
  }

  @Get('kakao/callback')
  async kakaoLoginCallback(@Query('code') code: string, @Res() res: Response) {
    const user = await this.authSerivce.authenticateKakaoUser(code);
    const tokens = await this.authSerivce.login(user);

    res.cookie('access_token', tokens.access_token, {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 5, // 5분
    });

    res.cookie('refresh_token', tokens.refresh_token, {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
    });

    res.redirect('http://localhost:3000');
  }

  @Get('profile')
  getProfile(@Req() req: Request) {
    console.log(req.cookies);
  }
}
