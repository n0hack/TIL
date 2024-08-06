import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from './redis/redis.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User as UserEntity } from './users/user.entity';
import { AuthModule } from './auth/auth.module';
import authConfig from 'config/auth.config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [authConfig],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('DB_HOST') || 'localhost',
        port: parseInt(config.get('DB_PORT')) || 3306,
        username: config.get('DB_USER'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_DATABASE'),
        entities: [UserEntity],
        synchronize: config.get('NODE_ENV') !== 'production',
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    RedisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
