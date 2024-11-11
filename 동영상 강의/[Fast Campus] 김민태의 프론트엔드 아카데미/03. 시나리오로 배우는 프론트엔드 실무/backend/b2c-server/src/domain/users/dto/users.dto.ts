import { ApiProperty } from "@nestjs/swagger";

export class UsersDto {
  @ApiProperty({ description: '아이디' })
  id: number;

  @ApiProperty({ description: '이름' })
  name: string;

  @ApiProperty({ description: '이메일' })
  email: string;
}
