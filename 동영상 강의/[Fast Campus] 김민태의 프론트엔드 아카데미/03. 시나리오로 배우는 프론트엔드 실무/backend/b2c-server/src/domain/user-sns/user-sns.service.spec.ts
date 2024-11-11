import { Test, TestingModule } from '@nestjs/testing';
import { UserSnsService } from './user-sns.service';

describe('UserSnsService', () => {
  let service: UserSnsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserSnsService],
    }).compile();

    service = module.get<UserSnsService>(UserSnsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
