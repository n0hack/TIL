import { CanActivate, ExecutionContext, Inject, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import jwtAccessConfig from '../config/jwt-access.config';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

export class JwtAccessGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(jwtAccessConfig.KEY) private readonly jwtAccessTokenConfig: ConfigType<typeof jwtAccessConfig>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('토큰이 존재하지 않습니다.');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, this.jwtAccessTokenConfig);
      request['user'] = payload;
      return true;
    } catch (e) {
      throw new UnauthorizedException('토큰이 유효하지 않습니다.');
    }
  }

  extractTokenFromHeader(request: Request) {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : null;
  }
}
