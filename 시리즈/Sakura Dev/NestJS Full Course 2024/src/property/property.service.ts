import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { Repository } from 'typeorm';
import { Property } from 'src/entities/property.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PaginationDto } from './dto/pagination.dto';
import { DEFAULT_PAGE_SIZE } from 'src/utils/contants';

@Injectable()
export class PropertyService {
  constructor(@InjectRepository(Property) private readonly propertyRepo: Repository<Property>) {}

  async findAll({ page = 1, limit = DEFAULT_PAGE_SIZE }: PaginationDto) {
    const totalCount = await this.propertyRepo.count();
    const totalPages = Math.ceil(totalCount / limit);
    const data = await this.propertyRepo.find({
      take: limit,
      skip: (page - 1) * limit,
    });

    return {
      data,
      totalCount,
      totalPages,
      currentPage: page,
    };
  }

  async findOne(id: number) {
    const property = await this.propertyRepo.findOne({ where: { id } });

    if (!property) throw new NotFoundException();
    return property;
  }

  async create(dto: CreatePropertyDto) {
    return await this.propertyRepo.save(dto);
  }

  async update(id: number, dto: UpdatePropertyDto) {
    const property = await this.findOne(id);
    return await this.propertyRepo.update(property, dto);
  }

  async delete(id: number) {
    const property = await this.findOne(id);
    return await this.propertyRepo.delete(property);
  }
}
