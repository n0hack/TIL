import { Module } from '@nestjs/common';
import { SalesTimelineService } from './sales-timeline.service';
import { SalesTimelineController } from './sales-timeline.controller';

@Module({
  controllers: [SalesTimelineController],
  providers: [SalesTimelineService]
})
export class SalesTimelineModule {}
