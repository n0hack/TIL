import { PickType } from '@nestjs/mapped-types';
import { IsEmail, IsString } from 'class-validator';
import { User } from 'src/entities/user.entity';

export class LoginUserDto extends PickType(User, ['email', 'password']) {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
