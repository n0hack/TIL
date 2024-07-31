import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { HttpModule } from '@nestjs/axios';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: 1000 * 60 * 5 }, // 5분
      }),
      inject: [ConfigService],
    }),
    HttpModule,
    UsersModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
