import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersSerivce: UsersService) {}

  @UseGuards(JwtGuard)
  @Get(':id')
  async getUserProfile(@Param('id') id: number) {
    console.log('호출?', id);
    const user = await this.usersSerivce.find({ id });
    return user;
  }
}
