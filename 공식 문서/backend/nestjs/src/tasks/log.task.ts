import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class LogTaskService {
  private readonly logger = new Logger(LogTaskService.name);

  /**
   * 선언적 cron 작업을 통해 5초마다 실행
   * https://docs.nestjs.com/techniques/task-scheduling#declarative-cron-jobs
   */
  @Cron(CronExpression.EVERY_5_SECONDS)
  handleCron() {
    this.logger.debug('5초마다 호출되는 cron 작업입니다!');
  }
}
