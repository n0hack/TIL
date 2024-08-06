import { PickType } from '@nestjs/mapped-types';
import { User } from 'src/users/user.entity';

export class LoginUserDto extends PickType(User, ['email', 'password']) {}
