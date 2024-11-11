import { Module } from '@nestjs/common';
import { TokensService } from './tokens.service';
import { TokensController } from './tokens.controller';

@Module({
  controllers: [TokensController],
  providers: [TokensService]
})
export class TokensModule {}
