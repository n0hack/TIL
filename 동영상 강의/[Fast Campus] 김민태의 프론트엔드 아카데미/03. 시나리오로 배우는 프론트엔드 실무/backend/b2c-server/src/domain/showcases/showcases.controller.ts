import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShowcasesService } from './showcases.service';
import { CreateShowcaseDto } from './dto/create-showcase.dto';
import { UpdateShowcaseDto } from './dto/update-showcase.dto';

@Controller('showcases')
export class ShowcasesController {
  constructor(private readonly showcasesService: ShowcasesService) {}

  @Post()
  create(@Body() createShowcaseDto: CreateShowcaseDto) {
    return this.showcasesService.create(createShowcaseDto);
  }

  @Get()
  findAll() {
    return this.showcasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.showcasesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShowcaseDto: UpdateShowcaseDto) {
    return this.showcasesService.update(+id, updateShowcaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.showcasesService.remove(+id);
  }
}
