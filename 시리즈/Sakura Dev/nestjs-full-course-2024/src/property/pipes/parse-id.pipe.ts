import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

// DI를 위해 Injectable 데코레이터 사용
@Injectable()
export class ParseIdPipe implements PipeTransform {
  transform(value: string): number {
    const val = parseInt(value, 10);

    if (isNaN(val)) throw new BadRequestException('ID는 숫자여야 합니다.');
    if (val <= 0) throw new BadRequestException('ID는 양수여야 합니다.');

    return val;
  }
}
