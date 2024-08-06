import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { HttpModule } from '@nestjs/axios';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { RedisModule } from 'src/redis/redis.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [JwtModule, HttpModule, RedisModule, UsersModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
