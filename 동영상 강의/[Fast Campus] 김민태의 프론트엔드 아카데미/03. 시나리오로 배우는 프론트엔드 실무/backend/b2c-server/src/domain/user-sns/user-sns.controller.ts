import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserSnsService } from './user-sns.service';
import { CreateUserSnDto } from './dto/create-user-sn.dto';
import { UpdateUserSnDto } from './dto/update-user-sn.dto';

@Controller('user-sns')
export class UserSnsController {
  constructor(private readonly userSnsService: UserSnsService) {}

  @Post()
  create(@Body() createUserSnDto: CreateUserSnDto) {
    return this.userSnsService.create(createUserSnDto);
  }

  @Get()
  findAll() {
    return this.userSnsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userSnsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserSnDto: UpdateUserSnDto) {
    return this.userSnsService.update(+id, updateUserSnDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userSnsService.remove(+id);
  }
}
