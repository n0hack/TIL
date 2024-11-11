import { Test, TestingModule } from '@nestjs/testing';
import { ShippingAddresssController } from './shipping-addresss.controller';
import { ShippingAddresssService } from './shipping-addresss.service';

describe('ShippingAddresssController', () => {
  let controller: ShippingAddresssController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShippingAddresssController],
      providers: [ShippingAddresssService],
    }).compile();

    controller = module.get<ShippingAddresssController>(ShippingAddresssController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
