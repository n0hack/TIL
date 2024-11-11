import { Injectable } from '@nestjs/common';
import { CreateShippingAddresssDto } from './dto/create-shipping-addresss.dto';
import { UpdateShippingAddresssDto } from './dto/update-shipping-addresss.dto';

@Injectable()
export class ShippingAddresssService {
  create(createShippingAddresssDto: CreateShippingAddresssDto) {
    return 'This action adds a new shippingAddresss';
  }

  findAll() {
    return `This action returns all shippingAddresss`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shippingAddresss`;
  }

  update(id: number, updateShippingAddresssDto: UpdateShippingAddresssDto) {
    return `This action updates a #${id} shippingAddresss`;
  }

  remove(id: number) {
    return `This action removes a #${id} shippingAddresss`;
  }
}
