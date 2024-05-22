import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';

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
}
