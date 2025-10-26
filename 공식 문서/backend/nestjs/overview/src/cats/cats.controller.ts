import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { CreateCatDto } from './cats.dto';
import type { Response } from 'express';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  // NestJS는 생성자를 통해 의존성 주입 가능(기본적으로 싱글톤 인스턴스)
  constructor(private catsService: CatsService) {}

  @Post()
  create(
    @Body() createCatDto: CreateCatDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    this.catsService.create(createCatDto);
    // Res를 사용하게 되면 개발자가 직접 응답을 건드리는 것으로 간주하여, NestJS의 응답에 대한 자동 처리 체계를 벗어남
    // 따라서 passthrough: true를 사용하여 NestJS의 응답 처리 체계 유지(return 그냥 반환해도 자동 처리)
    // return 'This action adds a new cat';
    res.status(HttpStatus.CREATED).send('This action adds a new cat');
  }

  @Get()
  findAll(@Query() query) {
    console.log(query);

    // 기본 자료형인 string, number, boolean을 반환하는 경우 직렬화 없이 값만 전송하며, 객체, 배열 등은 직렬화 과정을 거침
    // 이렇게 return을 이용해 값을 반환하면, 응답 코드는 항상 200(POST의 경우 201)
    // return 'This action returns all cats';

    return this.catsService.findAll();
  }

  @Get('abcd/*')
  findAllWithWildcard(): string {
    return 'This route uses a wildcard';
  }

  @Get(':id')
  // 파라미터 타입은 기본적으로 string
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }
}
