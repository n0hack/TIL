import { Test, TestingModule } from '@nestjs/testing';
import { ShowcasesController } from './showcases.controller';
import { ShowcasesService } from './showcases.service';

describe('ShowcasesController', () => {
  let controller: ShowcasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShowcasesController],
      providers: [ShowcasesService],
    }).compile();

    controller = module.get<ShowcasesController>(ShowcasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
