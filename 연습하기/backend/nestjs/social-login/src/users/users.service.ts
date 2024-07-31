import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

type TUser = {
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

  async findOrCreateUser({ socialId, provider, nickname, email }: TUser) {
    let user = await this.userRepository.findOne({
      where: {
        socialId,
        provider,
      },
    });

    if (!user) {
      user = this.userRepository.create({
        socialId,
        provider,
        nickname,
        email,
      });
      await this.userRepository.save(user);
    }

    return user;
  }
}
