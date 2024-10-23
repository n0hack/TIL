import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const UniqueCat = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    request.cat = {
      name: '톰',
      age: 3,
    };

    const cat = request.cat;

    return data ? cat?.[data] : cat;
  },
);
