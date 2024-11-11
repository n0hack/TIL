import { Test, TestingModule } from '@nestjs/testing';
import { UserSnsController } from './user-sns.controller';
import { UserSnsService } from './user-sns.service';

describe('UserSnsController', () => {
  let controller: UserSnsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserSnsController],
      providers: [UserSnsService],
    }).compile();

    controller = module.get<UserSnsController>(UserSnsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
