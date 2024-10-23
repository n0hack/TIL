import { IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class HeadersDto {
  @IsString()
  @Expose({ name: 'access-token' })
  accessToken: string;
}
