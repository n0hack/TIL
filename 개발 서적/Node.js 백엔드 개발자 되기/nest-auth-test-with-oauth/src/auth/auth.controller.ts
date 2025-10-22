import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from 'src/user/user.dto';
import {
  AuthenticatedGuard,
  GoogleAuthGuard,
  LocalAuthGuard,
  LoginGuard,
} from './auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() userDto: CreateUserDto) {
    return this.authService.register(userDto);
  }

  @Post('login')
  async login(@Req() req, @Res() res: Response) {
    const user = await this.authService.validateUser(
      req.body.email,
      req.body.password,
    );

    if (user) {
      res.cookie('login', JSON.stringify(user), {
        httpOnly: false, // 브라우저에서 읽을 수 있도록 함
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
      });

      return res.send({ message: '로그인 성공' });
    }

    return res.status(HttpStatus.UNAUTHORIZED).send({ message: '로그인 실패' });
  }

  @Post('login-with-guard')
  @UseGuards(LoginGuard)
  async loginWithGuard(@Req() req, @Res() res: Response) {
    // 쿠키는 없지만, request에 user가 존재하는 경우 응답에 쿠키 추가
    if (!req.cookies['login'] && req.user) {
      res.cookie('login', JSON.stringify(req.user), {
        httpOnly: true,
        // 테스트를 고려해 10초로 설정
        maxAge: 1000 * 10,
      });
    }

    return res.send({ message: '로그인 성공' });
  }

  @Get('test-guard')
  @UseGuards(LoginGuard)
  testGuard() {
    return '로그인된 사용자만 이 글이 보입니다.';
  }

  @Post('login-with-passport-local')
  @UseGuards(LocalAuthGuard)
  loginWithPassportLocal(@Req() req) {
    return req.user;
  }

  @Get('test-authenticated-guard')
  @UseGuards(AuthenticatedGuard)
  testAuthenticatedGuard() {
    return '인증된 사용자만 이 글이 보입니다.';
  }

  // 구글 로그인으로 이동하는 라우터
  @Get('to-google')
  @UseGuards(GoogleAuthGuard)
  async googleAuth(@Req() req) {}

  // 구글 로그인 콜백 실행 후 리다이렉트되는 라우터
  @Get('google')
  @UseGuards(GoogleAuthGuard)
  async googleAuthRedirect(@Req() req, @Res() res) {
    const { user } = req;

    return res.send(user);
  }
}
