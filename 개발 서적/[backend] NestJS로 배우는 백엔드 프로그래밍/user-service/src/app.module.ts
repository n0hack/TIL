import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import emailConfig from './config/emailConfig';
import { validationSchema } from './config/validationSchema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from './utils/middlewares/logger.middleware';
import { UsersController } from './users/users.controller';
import authConfig from './config/authConfig';
import { AppController } from './app.controller';
import { ExceptionModule } from './exception/exception.module';
import { BatchModule } from './batch/batch.module';

@Module({
  imports: [
    // 환경변수를 주입하는 모듈
    ConfigModule.forRoot({
      envFilePath: [`src/config/env/.${process.env.NODE_ENV}.env`],
      load: [emailConfig, authConfig],
      isGlobal: true,
      validationSchema,
    }),
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3307, // 로컬에서 사용 중인 3306 포트가 있기 때문에, Docker는 3307 포트로 사용
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: 'test',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false, // true는 매 실행마다 테이블을 재생성하기 때문에, 개발 환경에서만 사용
      migrations: ['dist/**/migrations/*.js'],
      migrationsTableName: 'migrations',
      migrationsRun: false,
    }),
    ExceptionModule,
    BatchModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(UsersController);
  }
}
