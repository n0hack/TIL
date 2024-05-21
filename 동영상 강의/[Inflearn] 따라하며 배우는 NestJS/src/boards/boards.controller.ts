import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  async getAllBoards() {
    return this.boardsService.getAllBoards();
  }

  @Post()
  @UsePipes(ValidationPipe)
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
    @Body(BoardStatusValidationPipe) dto: UpdateBoardDto,
  ) {
    const { status } = dto;
    return this.boardsService.updateBoardStatus(id, status);
  }
}
