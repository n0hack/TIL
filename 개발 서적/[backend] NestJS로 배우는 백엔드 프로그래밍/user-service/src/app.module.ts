import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import emailConfig from './config/emailConfig';
import { validationSchema } from './config/validationSchema';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`src/config/env/.${process.env.NODE_ENV}.env`],
      load: [emailConfig],
      isGlobal: true,
      validationSchema,
    }),
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3307,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: 'test',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false, // true는 개발 환경에서만 사용
      migrations: ['dist/**/migrations/*.js'],
      migrationsTableName: 'migrations',
      migrationsRun: false,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
