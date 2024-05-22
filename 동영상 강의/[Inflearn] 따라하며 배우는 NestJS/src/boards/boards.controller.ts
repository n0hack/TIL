import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { AuthGuard } from '@nestjs/passport';

@Controller('boards')
@UseGuards(AuthGuard())
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
  async getBoardById(@Param('id', ParseIntPipe) id: number) {
    return this.boardsService.getBoardById(id);
  }

  @Delete(':id')
  async deleteBoardById(@Param('id', ParseIntPipe) id: number) {
    return this.boardsService.deleteBoardById(id);
  }

  @Patch(':id/status')
  async updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body(BoardStatusValidationPipe) dto: UpdateBoardDto,
  ) {
    const { status } = dto;
    return this.boardsService.updateBoardStatus(id, status);
  }
}
