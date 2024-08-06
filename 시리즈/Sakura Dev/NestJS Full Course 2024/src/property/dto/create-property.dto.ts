import { IsInt, IsPositive, IsString, Length } from 'class-validator';

export class CreatePropertyDto {
  @IsString({ message: 'name은 문자열이어야 합니다.' })
  @Length(2, 20, { message: 'name은 2글자 이상 20글자 이하이어야 합니다.' })
  name: string;

  @IsString({ message: 'description은 문자열이어야 합니다.' })
  description: string;

  @IsInt({ message: 'area는 정수여야 합니다.' })
  @IsPositive({ message: 'area는 양수여야 합니다.' })
  area: number;
}
