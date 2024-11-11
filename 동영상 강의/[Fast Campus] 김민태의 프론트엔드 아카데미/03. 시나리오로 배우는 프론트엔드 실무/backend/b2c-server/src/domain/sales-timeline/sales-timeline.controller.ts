import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesTimelineService } from './sales-timeline.service';
import { CreateSalesTimelineDto } from './dto/create-sales-timeline.dto';
import { UpdateSalesTimelineDto } from './dto/update-sales-timeline.dto';

@Controller('sales-timeline')
export class SalesTimelineController {
  constructor(private readonly salesTimelineService: SalesTimelineService) {}

  @Post()
  create(@Body() createSalesTimelineDto: CreateSalesTimelineDto) {
    return this.salesTimelineService.create(createSalesTimelineDto);
  }

  @Get()
  findAll() {
    return this.salesTimelineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesTimelineService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalesTimelineDto: UpdateSalesTimelineDto) {
    return this.salesTimelineService.update(+id, updateSalesTimelineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesTimelineService.remove(+id);
  }
}
