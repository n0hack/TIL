import { ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@ApiTags('API Health')
@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  @ApiOperation({
    summary: '헬스 체크 API',
    description: 'API 서버 실행 상태 확인을 위한 헬스 체크 API',
  })
  @ApiOkResponse()
  @ApiResponse({
    status: 200,
    description: '서버가 실행중일 때는 항상 200 OK 응답을 보장합니다.',
  })
  ping(): string {
    return this.healthService.ping();
  }
}
