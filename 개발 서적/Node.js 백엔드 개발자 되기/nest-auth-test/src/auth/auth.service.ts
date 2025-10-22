import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async register(userDto: CreateUserDto) {
    const user = await this.userService.getUser(userDto.email);

    // 이미 가입된 유저가 있는 경우
    if (user) {
      throw new HttpException('이미 가입된 이메일입니다.', HttpStatus.CONFLICT);
    }

    // 비밀번호 암호화
    const hashedPassword = bcrypt.hashSync(userDto.password, 10);

    try {
      const user = await this.userService.createUser({
        ...userDto,
        password: hashedPassword,
      });

      // 비밀번호는 반환하지 않도록 처리
      const { password, ...userInfo } = user;

      return userInfo;
    } catch {
      throw new HttpException('서버 오류', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.getUser(email);

    if (!user) {
      return null;
    }

    const { password: hashedPassword, ...userInfo } = user;

    if (bcrypt.compareSync(password, hashedPassword)) {
      return userInfo;
    }

    return null;
  }
}
