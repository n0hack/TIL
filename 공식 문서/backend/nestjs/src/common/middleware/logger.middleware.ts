import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('[클래스 미들웨어] 요청 중...');
    next();
  }
}

/**
 * 기능적 미들웨어(Functional middleware)
 * - 메서드나 추가 종속성 등이 필요하지 않은 경우 간단하게 만들 수 있음
 * - https://docs.nestjs.com/middleware#functional-middleware
 */
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log('[기능적 미들웨어] 요청 중...');
  next();
}
