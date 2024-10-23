import { IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { NotEqualTo } from '../auth.validation';

export class AuthCredentialDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @NotEqualTo('password', { message: '회원명은 비밀번호와 달라야 합니다.' })
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]*$/)
  password: string;

  hi: string;
}
