import { Module } from '@nestjs/common';
import { UserSnsService } from './user-sns.service';
import { UserSnsController } from './user-sns.controller';

@Module({
  controllers: [UserSnsController],
  providers: [UserSnsService]
})
export class UserSnsModule {}
