import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board.model';

type V = {
  status: string;
};

@Injectable()
export class BoardStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [BoardStatus.PUBLIC, BoardStatus.PRIVATE];

  transform(value: V) {
    value.status = value.status.toUpperCase();

    if (!this.isStatusValid(value.status)) {
      throw new BadRequestException(
        `${value.status}는 유효한 상태가 아닙니다.`,
      );
    }

    return value;
  }

  private isStatusValid(status: unknown) {
    const index = this.allowedStatuses.indexOf(status as BoardStatus);
    return index !== -1;
  }
}
