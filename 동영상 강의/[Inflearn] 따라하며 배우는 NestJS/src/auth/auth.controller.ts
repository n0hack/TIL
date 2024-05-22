import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signUp(@Body(ValidationPipe) dto: AuthCredentialDto) {
    return this.authService.signUp(dto);
  }

  @Post('signin')
  signIn(
    @Body(ValidationPipe) dto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(dto);
  }

  @Post('test')
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {
    console.log(user);
  }
}
