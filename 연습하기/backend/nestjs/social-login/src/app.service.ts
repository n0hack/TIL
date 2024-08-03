import { Injectable } from '@nestjs/common';
import { RedisService } from './redis/redis.service';

@Injectable()
export class AppService {
  constructor(private readonly redis: RedisService) {}

  async test() {
    console.log(await this.redis.delete('dante'));
    return 'Hello World!';
  }
}
