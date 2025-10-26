import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Reqeust');
    next();
  }
}

// 간단한 경우 함수형 미들웨어로 만들어도 됨
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Reqeust');
  next();
}
