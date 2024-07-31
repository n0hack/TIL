import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', // 허용할 출처
    credentials: true, // 쿠키 등 인증 정보를 포함한 요청 허용
  });
  await app.listen(4000);
}
bootstrap();
