import { Controller, Get, Inject, Req } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import databaseConfig from 'config/database.config';
import { AppService } from './app.service';
import type { Request } from 'express';
import { TasksService } from './tasks/tasks.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(databaseConfig.KEY)
    private dbConfig: ConfigType<typeof databaseConfig>,
    private tasksService: TasksService,
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

  @Get('start-scheduler')
  startScheduler() {
    // 도메인-기능-주기 형태로 네이밍하면 좋을 것 같음
    // 스케줄러에 name이 남아있는데, 다시 시작하면 500 발생
    this.tasksService.addCronJob('{domain}-{feature}-{term}', '*/5');
    return 'Scheduler started';
  }

  @Get('stop-scheduler')
  async stopScheduler() {
    await this.tasksService.stopCronJob('{domain}-{feature}-{term}');
    return 'Scheduler stopped';
  }

  @Get('delete-scheduler')
  deleteScheduler() {
    this.tasksService.deleteCronJob('{domain}-{feature}-{term}');
    return 'Scheduler deleted';
  }
}
