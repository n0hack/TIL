import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { ParseIdPipe } from './pipes/parse-id.pipe';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PaginationDto } from './dto/pagination.dto';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.propertyService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.propertyService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreatePropertyDto) {
    return this.propertyService.create(dto);
  }

  @Patch(':id')
  update(@Param('id', ParseIdPipe) id: number, @Body() dto: UpdatePropertyDto) {
    return this.propertyService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIdPipe) id: number) {
    return this.propertyService.delete(id);
  }
}
