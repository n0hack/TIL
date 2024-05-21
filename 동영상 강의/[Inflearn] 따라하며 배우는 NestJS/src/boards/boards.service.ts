import { Injectable } from '@nestjs/common';
import { BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './board.entity';
import { BoardsRepository } from './boards.repository';

@Injectable()
export class BoardsService {
  constructor(private boardsRepository: BoardsRepository) {}

  getAllBoards(): Promise<Board[]> {
    return this.boardsRepository.getAllBoards();
  }

  createBoard(dto: CreateBoardDto): Promise<Board> {
    return this.boardsRepository.createBoard(dto);
  }

  getBoardById(id: number): Promise<Board> {
    return this.boardsRepository.getBoardById(id);
  }

  deleteBoardById(id: number): Promise<void> {
    return this.boardsRepository.deleteBoardById(id);
  }

  updateBoardStatus(id: number, status: BoardStatus) {
    return this.boardsRepository.updateBoardStatus(id, status);
  }
}
