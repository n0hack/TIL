import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // bootstrap에서는 의존성 주입이 불가능하기에, 클래스를 인수로 하여 get 메서드를 호출해야 함
  const configService = app.get(ConfigService);

  // await app.listen(process.env.PORT ?? 3000);
  await app.listen(configService.get('SERVER_PORT') ?? 3000);
}
bootstrap();
