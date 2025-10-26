import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { TestDynamicModule } from './test-dynamic/test-dynamic.module';

@Module({
  imports: [
    CatsModule,
    // global이 false이기 때문에, 어쨌든 공유 모듈로 사용되고 있음
    TestDynamicModule.forRoot({}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
