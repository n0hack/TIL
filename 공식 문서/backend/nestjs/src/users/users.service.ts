import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users as UsersEntity } from './users.entity';
import { Repository } from 'typeorm';

export type User = {
  userId: number;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'lucid',
      password: '1234',
    },
    {
      userId: 2,
      username: 'lucid2',
      password: '1234',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  // constructor(
  //   @InjectRepository(UsersEntity)
  //   private usersRepository: Repository<UsersEntity>,
  // ) {}

  // findAll(): Promise<UsersEntity[]> {
  //   return this.usersRepository.find();
  // }

  // findOne(id: number): Promise<UsersEntity | null> {
  //   return this.usersRepository.findOneBy({ id });
  // }

  // async remove(id: number): Promise<void> {
  //   await this.usersRepository.delete(id);
  // }
}
