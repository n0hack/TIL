import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

  async create(param: UserEntity) {
    const user = await this.userRepository.create(param);
    await this.userRepository.save(user);
    return user;
  }

  async find(param: Partial<UserEntity>) {
    return await this.userRepository.findOne({ where: { ...param } });
  }

  async findByProvider(param: Pick<UserEntity, 'provider' | 'providerId'>) {
    return await this.userRepository.findOne({
      where: {
        provider: param.provider,
        providerId: param.providerId,
      },
    });
  }

  async findById(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    return user;
  }

  async findUserOrCreate(param: UserEntity) {
    let user = await this.findByProvider(param);
    if (!user) {
      user = await this.create(param);
    }
    return user;
  }
}
