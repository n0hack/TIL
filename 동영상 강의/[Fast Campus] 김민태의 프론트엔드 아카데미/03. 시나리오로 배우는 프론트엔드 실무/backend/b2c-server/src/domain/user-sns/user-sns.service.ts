import { Injectable } from '@nestjs/common';
import { CreateUserSnDto } from './dto/create-user-sn.dto';
import { UpdateUserSnDto } from './dto/update-user-sn.dto';

@Injectable()
export class UserSnsService {
  create(createUserSnDto: CreateUserSnDto) {
    return 'This action adds a new userSn';
  }

  findAll() {
    return `This action returns all userSns`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userSn`;
  }

  update(id: number, updateUserSnDto: UpdateUserSnDto) {
    return `This action updates a #${id} userSn`;
  }

  remove(id: number) {
    return `This action removes a #${id} userSn`;
  }
}
