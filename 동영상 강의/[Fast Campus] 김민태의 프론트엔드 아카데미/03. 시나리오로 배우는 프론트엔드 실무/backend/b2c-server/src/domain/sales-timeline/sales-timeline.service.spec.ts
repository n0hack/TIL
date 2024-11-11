import { Test, TestingModule } from '@nestjs/testing';
import { SalesTimelineService } from './sales-timeline.service';

describe('SalesTimelineService', () => {
  let service: SalesTimelineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesTimelineService],
    }).compile();

    service = module.get<SalesTimelineService>(SalesTimelineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
