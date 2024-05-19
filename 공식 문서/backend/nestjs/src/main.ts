import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning();
  app.use(express.urlencoded({ extended: false }));
  await app.listen(3000);
}
bootstrap();
