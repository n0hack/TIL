import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getServiceName() {
    return '12shop B2C API Server';
  }

  ping() {
    return `I'm alive`;
  }
}
