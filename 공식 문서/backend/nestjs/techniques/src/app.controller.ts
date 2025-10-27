import { Controller, Get, Inject, Req } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import databaseConfig from 'config/database.config';
import { AppService } from './app.service';
import type { Request } from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(databaseConfig.KEY)
    private dbConfig: ConfigType<typeof databaseConfig>,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('config-test')
  configTest() {
    const dbUser = this.dbConfig.user;

    return dbUser;
  }

  @Get('cookie-test')
  cookieTest(@Req() req: Request) {
    console.log(req.cookies);
    return req.cookies;
  }
}
