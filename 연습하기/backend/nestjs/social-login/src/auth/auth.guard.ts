import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly config: ConfigService,
    private readonly authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest<Request>();
    const res = context.switchToHttp().getResponse<Response>();

    const accessToken = req.cookies['BLISS_ATOKEN_V1'];
    const refreshToken = req.cookies['BLISS_RTOKEN_V1'];

    try {
      return await this.validateTokens(req, res, accessToken, refreshToken);
    } catch (e) {
      res.clearCookie(this.config.get('ACCESS_TOKEN_COOKIE_NAME'));
      res.clearCookie(this.config.get('REFRESH_TOKEN_COOKIE_NAME'));

      throw new UnauthorizedException('로그인이 필요합니다.');
    }
  }

  private async validateTokens(req: Request, res: Response, accessToken?: string, refreshToken?: string) {
    try {
      const decodedAccessToken = await this.authService.decodeAccessToken(accessToken);
      const decodedRefreshToken = await this.authService.decodeRefreshToken(refreshToken);

      if (decodedRefreshToken) {
        req['userId'] = decodedAccessToken.userId;
        return true;
      } else {
        throw new Error('INVALID_REFRESH_TOKEN');
      }
    } catch (e) {
      return await this.handleExpireAccessToken(req, res, refreshToken);
    }
  }

  private async handleExpireAccessToken(req: Request, res: Response, refreshToken?: string) {
    const decodedRefreshToken = await this.checkRefreshToken(refreshToken);

    if (decodedRefreshToken) {
      const newAccessToken = await this.authService.generateAccessToken({ userId: decodedRefreshToken.userId });
      const newRefreshToken = await this.authService.generateRefreshToken({ userId: decodedRefreshToken.userId });

      res.cookie(this.config.get('ACCESS_TOKEN_COOKIE_NAME'), newAccessToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 3,
      });
      res.cookie(this.config.get('REFRESH_TOKEN_COOKIE_NAME'), newRefreshToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 10,
      });

      this.authService.saveRefreshToken(`refresh:${decodedRefreshToken.userId}`, newRefreshToken);
      req['userId'] = decodedRefreshToken.userId;
      return true;
    } else {
      throw new Error('INVALID_REFRESH_TOKEN');
    }
  }

  async checkRefreshToken(refreshToken?: string) {
    try {
      const decodedRefreshToken = await this.authService.decodeRefreshToken(refreshToken);
      const verifiedRefreshToken = await this.authService.verifyRefreshToken(decodedRefreshToken.userId, refreshToken);
      return verifiedRefreshToken ? decodedRefreshToken : null;
    } catch (e) {
      return null;
    }
  }
}
