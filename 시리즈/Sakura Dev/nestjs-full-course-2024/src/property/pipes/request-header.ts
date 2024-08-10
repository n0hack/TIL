import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';

// Header를 검증하기 위한 커스텀 데코레이터
export const RequestHeader = createParamDecorator(async (targetDto: any, ctx: ExecutionContext) => {
  const headers = ctx.switchToHttp().getRequest<Request>().headers;
  const dto = plainToInstance(targetDto, headers, {
    excludeExtraneousValues: true,
  });

  await validateOrReject(dto as any);
  return dto;
});
