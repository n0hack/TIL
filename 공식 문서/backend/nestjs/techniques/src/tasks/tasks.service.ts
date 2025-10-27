import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private readonly schedulerRegistry: SchedulerRegistry) {}

  @Cron(CronExpression.EVERY_30_SECONDS)
  handleCron() {
    this.logger.debug('30초마다 실행');
  }

  addCronJob(name: string, seconds: string) {
    const job = new CronJob(`${seconds} * * * * * `, () => {
      console.log(`cronJob ${name} 실행`);
    });

    this.schedulerRegistry.addCronJob(name, job);
    job.start();
  }

  async stopCronJob(name: string) {
    const job = this.schedulerRegistry.getCronJob(name);

    await job.stop();
  }

  deleteCronJob(name: string) {
    this.schedulerRegistry.deleteCronJob(name);
  }
}
