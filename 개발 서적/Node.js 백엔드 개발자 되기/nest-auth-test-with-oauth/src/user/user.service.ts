import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  createUser(userDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(userDto);
  }

  async getUser(email: string): Promise<User | null> {
    const user = await this.userRepository.findOne({
      where: { email },
    });

    return user;
  }

  async updateUser(email: string, userDto: UpdateUserDto) {
    const user = await this.getUser(email);

    if (user) {
      user.username = userDto.username;
      user.password = userDto.password;

      return this.userRepository.save(user);
    } else {
      return null;
    }
  }

  deleteUser(email: string) {
    return this.userRepository.delete({ email });
  }

  async findByEmailOrService(
    email: string,
    username: string,
    providerId?: string,
  ): Promise<User> {
    const foundUser = await this.getUser(email);

    if (foundUser) {
      return foundUser;
    }

    const newUser = await this.userRepository.save({
      email,
      username,
      providerId,
    });

    return newUser;
  }
}
