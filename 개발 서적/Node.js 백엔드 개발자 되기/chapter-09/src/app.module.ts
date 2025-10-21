import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { WeatherModule } from './weather/weather.module';
import config from 'configs/config';

console.log('env: ' + process.env.NODE_ENV);
console.log('current working directory: ' + process.cwd());

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/envs/${process.env.NODE_ENV}.env`,
      load: [config],
      // 서버가 한 번 기동된 이후에는 변경되지 않으므로, 캐시를 설정하면 성능에 이점이 있음
      cache: true,
      // 확장 변수 기능 활성화
      expandVariables: true,
    }),
    WeatherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
