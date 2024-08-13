import { PickType } from '@nestjs/mapped-types';
import { IsEmail, IsString } from 'class-validator';
import { User } from 'src/entities/user.entity';

export class RegisterUserDto extends PickType(User, ['name', 'email', 'password']) {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
