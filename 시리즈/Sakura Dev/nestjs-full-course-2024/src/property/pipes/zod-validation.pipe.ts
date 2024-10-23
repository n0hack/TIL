import { BadGatewayException, PipeTransform } from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: any) {
    const parsedValue = this.schema.safeParse(value);
    if (parsedValue.success) return parsedValue.data;

    throw new BadGatewayException(parsedValue.error.format());
  }
}
