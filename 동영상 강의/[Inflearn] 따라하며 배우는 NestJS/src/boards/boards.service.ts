import { Injectable } from '@nestjs/common';
import { BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './board.entity';
import { BoardsRepository } from './boards.repository';
import { User } from 'src/auth/user.entity';

@Injectable()
export class BoardsService {
  constructor(private boardsRepository: BoardsRepository) {}

  getAllBoards(user: User): Promise<Board[]> {
    return this.boardsRepository.getAllBoards(user);
  }

  createBoard(dto: CreateBoardDto, user: User): Promise<Board> {
    return this.boardsRepository.createBoard(dto, user);
  }

  getBoardById(id: number): Promise<Board> {
    return this.boardsRepository.getBoardById(id);
  }

  deleteBoardById(id: number, user: User): Promise<void> {
    return this.boardsRepository.deleteBoardById(id, user);
  }

  updateBoardStatus(id: number, status: BoardStatus) {
    return this.boardsRepository.updateBoardStatus(id, status);
  }
}
