import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // 전역 파이프에 validationPipe 적용
  app.use(cookieParser()); // 쿠키 파서 설정 - 쿠키를 Request 객체에서 읽어오는 미들웨어
  app.use(
    session({
      // 세션 암호화에 사용되는 키
      secret: 'very-important-secret',
      // 세션을 항상 저장할지 여부
      resave: false,
      // 세션이 초기화되지 않은 경우 세션을 저장할지 여부
      // 인증되지 않은 사용자도 빈 값을 저장하므로, 불필요한 공간이 발생하지 false로 설정
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60, // 유효시간 1시간
      },
    }),
  );
  // passport 초기화
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
