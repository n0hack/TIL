import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
  ValidationPipe,
} from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { logger } from './common/middleware/logger.middleware';
import { CatsController } from './cats/cats.controller';
import { HttpExceptionFilter } from './http-exception.filter';
import { APP_PIPE } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './config/db.config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dbConfig],
      isGlobal: true,
      /**
       * 환경변수 유효성 검사
       * https://docs.nestjs.com/techniques/configuration#schema-validation
       */
      validationSchema: Joi.object({
        DATABASE_USER: Joi.string().required().default('루시드'),
        DATABASE_PORT: Joi.number().default(5432),
      }),
    }),
    CatsModule,
  ],
  providers: [
    /**
     * app.useGlobalFilters(new HttpExceptionFilter());
     * 전역 범위 필터는 모듈 컨텍스트 외부에서 수행되므로, 종속성 주입이 필요한 경우 아래 형태로 직접 등록할 수 있음
     * https://docs.nestjs.com/exception-filters#binding-filters
     */
    {
      provide: 'APP_FILTER',
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .exclude(
        { path: 'cats', method: RequestMethod.GET },
        { path: 'cats', method: RequestMethod.POST },
      )
      .forRoutes(CatsController);
  }
}
