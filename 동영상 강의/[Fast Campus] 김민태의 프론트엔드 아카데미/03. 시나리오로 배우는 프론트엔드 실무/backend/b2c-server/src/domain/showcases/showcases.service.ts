import { Injectable } from '@nestjs/common';
import { CreateShowcaseDto } from './dto/create-showcase.dto';
import { UpdateShowcaseDto } from './dto/update-showcase.dto';

@Injectable()
export class ShowcasesService {
  create(createShowcaseDto: CreateShowcaseDto) {
    return 'This action adds a new showcase';
  }

  findAll() {
    return `This action returns all showcases`;
  }

  findOne(id: number) {
    return `This action returns a #${id} showcase`;
  }

  update(id: number, updateShowcaseDto: UpdateShowcaseDto) {
    return `This action updates a #${id} showcase`;
  }

  remove(id: number) {
    return `This action removes a #${id} showcase`;
  }
}
