import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', // 허용할 출처
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.use(cookieParser());
  await app.listen(4000);
}
bootstrap();
