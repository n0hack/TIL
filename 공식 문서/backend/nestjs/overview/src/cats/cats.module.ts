import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { TestDynamicModule } from 'src/test-dynamic/test-dynamic.module';

@Module({
  imports: [TestDynamicModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
