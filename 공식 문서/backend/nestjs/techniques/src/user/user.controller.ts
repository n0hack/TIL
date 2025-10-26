import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './user.dto';

@Controller('user')
export class UserController {
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return 'This action adds a new user';
  }

  @Get(':id')
  // transform에 의해 number 자료형으로 변환
  findOne(@Param('id') id: number) {
    console.log(typeof id);
    return `This action returns a #${id} user`;
  }
}
