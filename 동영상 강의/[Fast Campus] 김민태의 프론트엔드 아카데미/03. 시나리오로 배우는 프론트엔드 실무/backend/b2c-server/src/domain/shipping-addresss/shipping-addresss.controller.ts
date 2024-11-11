import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShippingAddresssService } from './shipping-addresss.service';
import { CreateShippingAddresssDto } from './dto/create-shipping-addresss.dto';
import { UpdateShippingAddresssDto } from './dto/update-shipping-addresss.dto';

@Controller('shipping-addresss')
export class ShippingAddresssController {
  constructor(private readonly shippingAddresssService: ShippingAddresssService) {}

  @Post()
  create(@Body() createShippingAddresssDto: CreateShippingAddresssDto) {
    return this.shippingAddresssService.create(createShippingAddresssDto);
  }

  @Get()
  findAll() {
    return this.shippingAddresssService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shippingAddresssService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShippingAddresssDto: UpdateShippingAddresssDto) {
    return this.shippingAddresssService.update(+id, updateShippingAddresssDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shippingAddresssService.remove(+id);
  }
}
