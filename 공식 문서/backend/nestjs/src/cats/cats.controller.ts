import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body() dto: CreateCatDto) {
    this.catsService.create(dto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get('change-http-code')
  @HttpCode(201)
  changeHttpCode(): string {
    return 'This action should return a status code of 201';
  }
}
