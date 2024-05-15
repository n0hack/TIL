import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guard/roles.guard';
import { UniqueCat } from 'src/common/decorators/cat.decorator';

@UseGuards(RolesGuard)
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @Roles(['admin'])
  create(@Body() dto: CreateCatDto) {
    this.catsService.create(dto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get('unique')
  async findUniqueCat(@UniqueCat('name') cat) {
    return cat;
  }

  @Get('change-http-code')
  @HttpCode(201)
  changeHttpCode(): string {
    return 'This action should return a status code of 201';
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Cat> {
    return this.catsService.findOne(id);
  }
}
