import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async updateHashedRefreshToken(userId: number, hashedRefreshToken: string) {
    return await this.userRepo.update({ id: userId }, { hashedRefreshToken });
  }

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepo.create(createUserDto); // create를 사용하지 않고, 바로 save하면 트리거가 발생하지 않음
    return await this.userRepo.save(user);
  }

  async findByEmail(email: string) {
    return await this.userRepo.findOne({
      where: { email },
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number) {
    return await this.userRepo.findOne({
      where: { id },
      select: ['id', 'firstName', 'lastName', 'email', 'hashedRefreshToken', 'role'],
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return 'hi';
  }
}
