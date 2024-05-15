import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [
    CatsService,
    {
      provide: 'CUSTOM_PROVIDER',
      useValue: {
        key: 'value',
      },
    },
  ],
})
export class CatsModule {}
