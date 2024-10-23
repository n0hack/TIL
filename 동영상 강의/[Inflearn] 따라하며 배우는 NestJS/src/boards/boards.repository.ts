import { DataSource, Repository } from 'typeorm';
import { Board } from './board.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board.model';
import { User } from 'src/auth/user.entity';

@Injectable()
export class BoardsRepository extends Repository<Board> {
  constructor(dataSource: DataSource) {
    super(Board, dataSource.createEntityManager());
  }

  async getAllBoards(user: User): Promise<Board[]> {
    // 쿼리 빌더 사용
    const query = this.createQueryBuilder('board');

    query.where('board.userId = :userId', { userId: user.id });

    const boards = await query.getMany();

    return boards;
  }

  async createBoard(dto: CreateBoardDto, user: User): Promise<Board> {
    const { title, description } = dto;
    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
      user,
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

  async deleteBoardById(id: number, user): Promise<void> {
    const result = await this.delete({ id, user });

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
