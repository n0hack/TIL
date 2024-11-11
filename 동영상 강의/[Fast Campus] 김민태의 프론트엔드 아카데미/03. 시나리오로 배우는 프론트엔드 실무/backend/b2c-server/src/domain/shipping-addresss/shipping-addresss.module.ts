import { Module } from '@nestjs/common';
import { ShippingAddresssService } from './shipping-addresss.service';
import { ShippingAddresssController } from './shipping-addresss.controller';

@Module({
  controllers: [ShippingAddresssController],
  providers: [ShippingAddresssService]
})
export class ShippingAddresssModule {}
