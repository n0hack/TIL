import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiTags, ApiCreatedResponse, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { UsersDto } from './dto/users.dto';
import { UsersService } from './users.service';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  @ApiBody({ type: UsersDto })
  @ApiOperation({
    summary: '전체 사용자 리스트를 반환한다.',
    description: '전체 사용자 리스트를 제공하는 내부 어드민 전용 API다. 공중망 클라이언트에서 호출할 수 없다.',
  })
  @ApiResponse({ status: 200, description: '성공', type: UsersDto })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
