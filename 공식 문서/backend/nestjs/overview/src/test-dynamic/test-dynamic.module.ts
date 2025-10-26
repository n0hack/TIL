import { DynamicModule, Module } from '@nestjs/common';
import { TestDynamicService } from './test-dynamic.service';

@Module({
  providers: [TestDynamicService],
  exports: [TestDynamicService],
})
// 동적 모듈 테스트
export class TestDynamicModule {
  static forRoot(
    options: { global?: boolean } = { global: false },
  ): DynamicModule {
    return {
      module: TestDynamicModule,
      providers: [TestDynamicService],
      exports: [TestDynamicService],
      ...options,
    };
  }
}
