import { Test, TestingModule } from '@nestjs/testing';
import { ShippingAddresssService } from './shipping-addresss.service';

describe('ShippingAddresssService', () => {
  let service: ShippingAddresssService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShippingAddresssService],
    }).compile();

    service = module.get<ShippingAddresssService>(ShippingAddresssService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
