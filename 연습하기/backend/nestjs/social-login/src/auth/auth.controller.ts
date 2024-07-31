import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authSerivce: AuthService) {}

  @Get('kakao/login')
  kakaoLogin(@Res() res: Response, @Query('redirect_uri') redirectUri: string) {
    const url = this.authSerivce.getKakaoAuthUrl();
    res.redirect(url + `&state=${redirectUri}`);
  }

  @Get('kakao/callback')
  async kakaoLoginCallback(@Query('code') code: string, @Res() res: Response) {
    const { token } = await this.authSerivce.getKakaoUserInfo(code);

    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
    });

    res.redirect('http://localhost:3000');
  }
}
