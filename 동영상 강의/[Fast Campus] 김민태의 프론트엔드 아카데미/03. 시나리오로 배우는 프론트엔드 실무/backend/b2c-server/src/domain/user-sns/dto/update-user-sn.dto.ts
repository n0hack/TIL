import { PartialType } from '@nestjs/mapped-types';
import { CreateUserSnDto } from './create-user-sn.dto';

export class UpdateUserSnDto extends PartialType(CreateUserSnDto) {}
