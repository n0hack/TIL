import { Module } from '@nestjs/common';
import { ChatGateway, RoomGateway } from './chat/chat.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [ChatGateway, RoomGateway],
})
export class AppModule {}
