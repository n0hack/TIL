import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

  async findUserByProvider(param: Pick<UserEntity, 'provider' | 'providerId'>) {
    return await this.userRepository.findOne({
      where: {
        provider: param.provider,
        providerId: param.providerId,
      },
    });
  }

  async findUserById(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    return {
      nickname: user.nickname,
      profileImage: user.profileImage,
    };
  }

  async findUserOrCreate(
    param: Pick<UserEntity, 'provider' | 'providerId' | 'nickname' | 'profileImage'>,
  ): Promise<UserEntity> {
    let user = await this.findUserByProvider(param);
    if (!user) {
      user = await this.userRepository.create({
        nickname: param.nickname,
        profileImage: param.profileImage,
        provider: param.provider,
        providerId: param.providerId,
      });
      await this.userRepository.save(user);
    }
    return user;
  }
}
