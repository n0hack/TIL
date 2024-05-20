import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  async getAllBoards() {
    return this.boardsService.getAllBoards();
  }

  @Post()
  async createBoard(@Body() dto: CreateBoardDto) {
    return this.boardsService.createBoard(dto);
  }

  @Get(':id')
  async getBoardById(@Param('id') id: string) {
    return this.boardsService.getBoardById(id);
  }

  @Delete(':id')
  async deleteBoardById(@Param('id') id: string) {
    this.boardsService.deleteBoardById(id);
  }

  @Patch(':id/status')
  async updateBoardStatus(
    @Param('id') id: string,
    @Body() dto: UpdateBoardDto,
  ) {
    const { status } = dto;
    return this.boardsService.updateBoardStatus(id, status);
  }
}
