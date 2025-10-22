import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      // URL 뒤에 붙을 경로 지정
      serveRoot: '/uploads',
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
