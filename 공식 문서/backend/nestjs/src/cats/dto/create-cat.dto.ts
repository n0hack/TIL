import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateCatDto {
  @ApiProperty({
    description: '고양이 이름',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: '고양이 나이',
  })
  @IsInt()
  readonly age: number;

  @ApiProperty({
    description: '고양이 종',
  })
  @IsString()
  readonly breed: string;
}
