import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  createUser(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @Get('getUser/:email')
  async getUser(@Param('email') email: string) {
    return this.userService.getUser(email);
  }

  @Put('update/:email')
  updateUser(@Param('email') email: string, @Body() userDto: UpdateUserDto) {
    return this.userService.updateUser(email, userDto);
  }

  @Delete('delete/:email')
  deleteUser(@Param('email') email: string) {
    return this.userService.deleteUser(email);
  }
}
