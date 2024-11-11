import { Injectable } from '@nestjs/common';
import { CreateSalesTimelineDto } from './dto/create-sales-timeline.dto';
import { UpdateSalesTimelineDto } from './dto/update-sales-timeline.dto';

@Injectable()
export class SalesTimelineService {
  create(createSalesTimelineDto: CreateSalesTimelineDto) {
    return 'This action adds a new salesTimeline';
  }

  findAll() {
    return `This action returns all salesTimeline`;
  }

  findOne(id: number) {
    return `This action returns a #${id} salesTimeline`;
  }

  update(id: number, updateSalesTimelineDto: UpdateSalesTimelineDto) {
    return `This action updates a #${id} salesTimeline`;
  }

  remove(id: number) {
    return `This action removes a #${id} salesTimeline`;
  }
}
