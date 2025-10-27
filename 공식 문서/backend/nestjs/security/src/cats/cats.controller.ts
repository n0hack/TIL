import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Role, Roles } from 'src/auth/auth.decorator';
import { RolesGuard } from 'src/auth/auth.guard';

@Controller('cats')
export class CatsController {
  @Post()
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  create(@Body() createCatDto: any) {
    console.log(createCatDto);
    return 'Created a new cat';
  }
}
