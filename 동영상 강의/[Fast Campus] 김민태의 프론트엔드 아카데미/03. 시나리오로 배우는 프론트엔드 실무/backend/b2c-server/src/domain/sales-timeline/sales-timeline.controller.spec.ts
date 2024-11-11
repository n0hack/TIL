import { Test, TestingModule } from '@nestjs/testing';
import { SalesTimelineController } from './sales-timeline.controller';
import { SalesTimelineService } from './sales-timeline.service';

describe('SalesTimelineController', () => {
  let controller: SalesTimelineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalesTimelineController],
      providers: [SalesTimelineService],
    }).compile();

    controller = module.get<SalesTimelineController>(SalesTimelineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
