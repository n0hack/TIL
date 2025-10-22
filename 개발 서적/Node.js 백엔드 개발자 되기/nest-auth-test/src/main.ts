import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 전역 파이프에 ValidationPipe 등록
  app.useGlobalPipes(new ValidationPipe());

  // Request 객체에서 쿠키를 읽을 수 있도록 cookie-parser 미들웨어 등록
  app.use(cookieParser());
  app.use(
    session({
      // 세션 암호화에 사용되는 키
      secret: 'very-important-secret',
      // 세션을 항상 저장할지 여부
      resave: false,
      // 초기화되지 않은 세션도 저장할지 여부
      // 인증되지 않은 사용자도 빈 값을 저장하므로, 공간 낭비를 막기 위해 false로 설정
      saveUninitialized: false,
      cookie: {
        // 유효 시간: 1시간
        maxAge: 1000 * 60 * 60,
      },
    }),
  );
  // Passport 초기화 및 세션 사용 설정
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
