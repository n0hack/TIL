import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      // 에러 메시지를 표시하지 않도록 설정
      // 개발 환경에서만 활성화
      disableErrorMessages: true,

      // DTO에 없는 값 제거
      whitelist: true,

      // DTO에 없는 값 오면 에러 발생
      forbidNonWhitelisted: true,

      // DTO에 맞게 타입 변환
      transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
