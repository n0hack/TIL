import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { ParseIdPipe } from './pipes/parse-id.pipe';
import { ZodValidationPipe } from './pipes/zod-validation.pipe';
import { createPropertySchema } from './dto/create-property-zod.dto';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get()
  findAll() {
    return 'All properties';
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
    console.log(typeof id, typeof sort);
    return id;
  }

  @Post()
  // @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  @UsePipes(new ZodValidationPipe(createPropertySchema))
  create(
    // @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    @Body()
    body: CreatePropertyDto,
  ) {
    console.log(body);
    return body;
  }

  @Patch(':id')
  update(
    @Param('id', ParseIdPipe) id: number,
    @Body() body: CreatePropertyDto,
    @RequestHeader(new ValidationPipe({ whitelist: true, validateCustomDecorators: true })) header: HeadersDto,
  ) {
    return header;
  }
}
