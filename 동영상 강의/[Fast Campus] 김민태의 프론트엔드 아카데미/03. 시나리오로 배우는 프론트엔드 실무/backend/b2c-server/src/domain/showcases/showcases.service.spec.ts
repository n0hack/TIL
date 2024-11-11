import { Test, TestingModule } from '@nestjs/testing';
import { ShowcasesService } from './showcases.service';

describe('ShowcasesService', () => {
  let service: ShowcasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShowcasesService],
    }).compile();

    service = module.get<ShowcasesService>(ShowcasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
