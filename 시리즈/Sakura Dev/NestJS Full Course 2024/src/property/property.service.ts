import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { Repository } from 'typeorm';
import { Property } from 'src/entities/property.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdatePropertyDto } from './dto/update-property.dto';

@Injectable()
export class PropertyService {
  constructor(@InjectRepository(Property) private readonly propertyRepo: Repository<Property>) {}

  async findAll() {
    return await this.propertyRepo.find();
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
