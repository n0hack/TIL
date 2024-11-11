import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find({
      relations: {
        photos: true,
      }
    });
  }

  findOne(id: string) {
    return this.productsRepository.findOne({
      where: { id },
      relations: {
        photos: true,
      }
    })
  }
}
