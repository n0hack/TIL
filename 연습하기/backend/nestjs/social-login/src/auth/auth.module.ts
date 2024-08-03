import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { HttpModule } from '@nestjs/axios';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [JwtModule, HttpModule, UsersModule, RedisModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
