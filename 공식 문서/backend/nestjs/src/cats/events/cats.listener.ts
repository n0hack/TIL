import { OnEvent } from '@nestjs/event-emitter';
import { CatCreatedEvent } from './cat-created.event';

export class CatsListener {
  @OnEvent('cat.created')
  handleEvent(event: CatCreatedEvent) {
    console.log(event.name);
  }
}
