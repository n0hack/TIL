import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { User } from 'src/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import jwtAccessConfig from './config/jwt-access.config';
import jwtRefreshConfig from './config/jwt-refresh.config';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({ global: true }),
    ConfigModule.forFeature(jwtAccessConfig),
    ConfigModule.forFeature(jwtRefreshConfig),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService],
})
export class AuthModule {}
