import { Injectable, Logger } from '@nestjs/common';
import { Cron, SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  constructor(private schedulerRegistry: SchedulerRegistry) {
    this.addCronJob();
  }

  @Cron('* * * * * *', { name: 'cronTask' })
  handleCron() {
    this.logger.log('Task 호출!');
  }

  addCronJob() {
    const name = 'cronSample';

    const job = new CronJob('* * * * * *', () => {
      this.logger.warn('run! ' + name);
    });

    this.schedulerRegistry.addCronJob(name, job);
    this.logger.warn(`add cron job: ${name}`);
  }
}
