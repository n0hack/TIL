import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { logger } from './common/middlewares/logger.middleware';
import { TestDynamicModule } from './test-dynamic/test-dynamic.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    CatsModule,
    // global이 false이기 때문에, 어쨌든 공유 모듈로 사용되고 있음
    TestDynamicModule.forRoot({}),
    // forRoot = 전역 설정
    // forFeature = forRoot 설정 확장
    // 호출하는 모듈에서 특정 속성을 줘서 사용하고 싶은 경우 = register (호출할 때마다 새로 생성)
    // 보통 forRoot와 register를 같이 쓰는 일은 없음
    ConfigModule.register({ folder: './config' }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   // 전역 필터이지만, DI가 필요한 경우 이 안에서 토큰과 함께 등록
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
  ],
})
export class AppModule implements NestModule {
  // 미들웨어 적용
  // 특정 라우터/메서드 적용 가능하며, 컨트롤러 자체를 보낼 수도 있음
  configure(consumer: MiddlewareConsumer) {
    consumer
      // 쉼표로 구분하여 순차적으로 등록하면, 순서대로 실행됨
      // 모든 경로에 미들웨어를 한 번에 등록하고 싶은 경우, main.ts에서 app에 적용하면 됨
      // .apply(LoggerMiddleware)
      .apply(logger)
      .forRoutes({ path: 'cats/*path', method: RequestMethod.GET });
  }
}
