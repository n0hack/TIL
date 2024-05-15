import { Controller, Post } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';

@Controller('batch')
export class BatchController {
  constructor(private scheduler: SchedulerRegistry) {}

  @Post('start')
  start() {
    const job = this.scheduler.getCronJob('cronSample');
    job.start();
    console.log('start cron job ', job.lastDate());
  }

  @Post('stop')
  stop() {
    const job = this.scheduler.getCronJob('cronSample');
    job.stop();
    console.log('stop cron job ', job.lastDate());
  }
}
