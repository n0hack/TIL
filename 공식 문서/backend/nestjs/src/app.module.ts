import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { logger } from './common/middleware/logger.middleware';
import { CatsController } from './cats/cats.controller';
import { HttpExceptionFilter } from './http-exception.filter';

@Module({
  imports: [CatsModule],
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
