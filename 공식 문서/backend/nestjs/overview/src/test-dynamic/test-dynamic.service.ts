import { Injectable } from '@nestjs/common';

@Injectable()
export class TestDynamicService {
  getTest(): string {
    return 'Test Dynamic Service';
  }
}
