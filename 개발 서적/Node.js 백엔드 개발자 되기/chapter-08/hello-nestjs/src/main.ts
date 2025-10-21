import { NestFactory } from '@nestjs/core';
import { HelloModule } from './hello.module';

async function bootstrap() {
  const app = await NestFactory.create(HelloModule);

  await app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}

bootstrap();
