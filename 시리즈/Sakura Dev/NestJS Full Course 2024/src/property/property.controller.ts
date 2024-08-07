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
    this.propertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
    console.log(typeof id);
    console.log(typeof sort);

    return this.propertyService.findOne();
  }

  @Post()
  // @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  @UsePipes(new ZodValidationPipe(createPropertySchema))
  create(
    // @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    @Body()
    dto: CreatePropertyDto,
  ) {
    return this.propertyService.create(dto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIdPipe) id: number,
    @Body() dto: CreatePropertyDto,
    @RequestHeader(new ValidationPipe({ whitelist: true, validateCustomDecorators: true })) header: HeadersDto,
  ) {
    return this.propertyService.update(id, dto, header);
  }
}
