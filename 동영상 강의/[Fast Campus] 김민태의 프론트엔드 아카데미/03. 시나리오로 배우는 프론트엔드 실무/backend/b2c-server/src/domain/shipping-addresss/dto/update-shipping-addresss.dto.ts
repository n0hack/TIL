import { PartialType } from '@nestjs/mapped-types';
import { CreateShippingAddresssDto } from './create-shipping-addresss.dto';

export class UpdateShippingAddresssDto extends PartialType(CreateShippingAddresssDto) {}
