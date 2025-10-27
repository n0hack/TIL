import { Injectable } from '@nestjs/common';
import { Role } from 'src/auth/auth.decorator';

export type User = {
  userId: number;
  username: string;
  password: string;
  roles: Role[];
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'NoHack',
      password: '123123',
      roles: [Role.Admin, Role.User],
    },
    {
      userId: 2,
      username: 'Lucid',
      password: '456456',
      roles: [Role.User],
    },
  ];

  findOne(username: string): User | undefined {
    return this.users.find((user) => user.username === username);
  }
}
