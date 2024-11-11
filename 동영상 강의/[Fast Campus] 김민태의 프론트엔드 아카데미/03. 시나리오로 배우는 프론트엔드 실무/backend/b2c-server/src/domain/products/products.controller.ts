import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';

@ApiTags('Product')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: '판매 상품 전체 목록' })
  @ApiResponse({
    status: 200,
    description: '판매 상품 전체 목록 반환',
  })  
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '판매 상품 상세 정보' })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }
}
