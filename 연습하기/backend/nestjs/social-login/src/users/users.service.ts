import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

type UserData = {
  socialId: string;
  provider: 'kakao' | 'naver';
  nickname: string;
  email?: string;
};

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async validateUser({ provider, socialId, nickname, email }: UserData) {
    let user = await this.userRepository.findOne({
      where: { provider, socialId },
    });

    if (!user) {
      user = await this.userRepository.create({
        provider,
        socialId,
        nickname,
        email,
      });
      await this.userRepository.save(user);
    }

    return user;
  }
}
