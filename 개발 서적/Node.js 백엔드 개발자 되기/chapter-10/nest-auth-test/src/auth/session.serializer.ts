import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private userService: UserService) {
    super();
  }

  // 세션에 정보 저장
  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    // 세션에 저장할 정보
    done(null, user.email);
  }

  // 세션에서 가져온 정보로 유저 정보 반환
  async deserializeUser(
    payload: any,
    done: (err: Error, user: any) => void,
  ): Promise<any> {
    const user = await this.userService.getUser(payload);

    if (!user) {
      done(new Error('No User'), null);
      return;
    }

    const { password, ...userInfo } = user;

    // req.user에 저장
    done(null, userInfo);
  }
}
