import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string) {
    const user = this.usersService.findOne(username);

    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.userId,
      username: user.username,
      roles: user.roles,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
