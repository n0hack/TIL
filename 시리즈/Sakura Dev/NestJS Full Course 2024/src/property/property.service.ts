import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { HeadersDto } from './dto/headers.dto';

@Injectable()
export class PropertyService {
  async findAll() {
    return 'Hello World!';
  }

  async findOne() {
    return 'Hello World!';
  }

  async create(dto: CreatePropertyDto) {
    return dto;
  }

  async update(id: number, dto: CreatePropertyDto, header: HeadersDto) {
    return { id, ...dto, ...header };
  }
}
