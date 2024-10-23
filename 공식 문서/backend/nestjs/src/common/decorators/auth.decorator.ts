import { applyDecorators } from '@nestjs/common';

type Role = 'admin' | 'user';

export function Auth(roles: Role[]) {
  // 인증 관련된 데코레이터를 한 곳에 모아놓음으로써 응집도를 높일 수 있음
  return applyDecorators(/* 여러가지 데코레이터 */);
}
