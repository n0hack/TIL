import { Controller, Get } from '@nestjs/common';
import { DogHealthIndicator } from './dog.health';
import { HealthCheck, HealthCheckService, HttpHealthIndicator, TypeOrmHealthIndicator } from '@nestjs/terminus';

@Controller('health-check')
export class HealthCheckController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: TypeOrmHealthIndicator,
    private dogHealthIndicator: DogHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    // 다양한 방법으로 서버 상태를 체크할 수 있음
    return this.health.check([
      () => this.http.pingCheck('google', 'https://google.com'),
      () => this.dogHealthIndicator.isHealthy('dog'),
      // () => this.db.pingCheck("database")
    ]);
  }
}
