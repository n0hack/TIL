import { InjectRedis } from '@liaoliaots/nestjs-redis';
import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  async get(key: string): Promise<string | null> {
    return await this.redis.get(key);
  }

  async set(key: string, value: string, expire: number) {
    return await this.redis.set(key, value, 'EX', expire);
  }

  async delete(key: string) {
    return await this.redis.del(key);
  }

  async exists(key: string) {
    const result = await this.redis.exists(key);
    return result === 1;
  }
}
