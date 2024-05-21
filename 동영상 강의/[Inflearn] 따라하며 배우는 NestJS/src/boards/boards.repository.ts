import { DataSource, Repository } from 'typeorm';
import { Board } from './board.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board.model';

@Injectable()
export class BoardsRepository extends Repository<Board> {
  constructor(dataSource: DataSource) {
    super(Board, dataSource.createEntityManager());
  }

  async getAllBoards(): Promise<Board[]> {
    return this.find();
  }

  async createBoard(dto: CreateBoardDto): Promise<Board> {
    const { title, description } = dto;
    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });
    await this.save(board);
    return board;
  }

  async getBoardById(id: number): Promise<Board> {
    const board = await this.findOne({ where: { id } });
    if (!board) {
      throw new NotFoundException(`${id}에 해당하는 게시물이 없습니다.`);
    }
    return board;
  }

  async deleteBoardById(id: number): Promise<void> {
    const result = await this.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`${id}에 해당하는 게시물이 없습니다.`);
    }
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);

    board.status = status;
    await this.save(board);

    return board;
  }
}
