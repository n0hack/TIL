import { Controller, Get, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('kakao')
  async kakaoRedirect(@Res() res: Response): Promise<void> {
    const redirect_uri = 'http://localhost:3000/kakao/callback';
    const url = `https://kauth.kakao.com/oauth/authorize?client_id=e949d1e3f9b01916e72dc3dd8103c228&redirect_uri=${redirect_uri}&response_type=code`;
    res.redirect(url);
  }

  @Get('kakao/callback')
  kakao(@Query('code') code: string): string {
    return code;
  }
}
