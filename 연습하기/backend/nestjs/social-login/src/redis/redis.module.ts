import { Global, Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { RedisModule as NestRedisModule } from '@liaoliaots/nestjs-redis';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [
    NestRedisModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        config: {
          host: config.get('REDIS_HOST') || 'localhost',
          port: config.get('REDIS_PORT') || 6379,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}
