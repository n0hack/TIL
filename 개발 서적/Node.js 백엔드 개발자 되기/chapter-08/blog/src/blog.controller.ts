import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostDto } from './blog.model';
import { BlogMongoRepository } from './blog.repository';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogMongoRepository) {}

  @Get()
  getAllPosts() {
    console.log('모든 글 가져오기');

    return this.blogService.getAllPosts();
  }

  @Get(':id')
  async getPost(@Param('id') id: string) {
    console.log(`[id: ${id}] 게시글 하나 가져오기`);

    return this.blogService.getPost(id);
  }

  @Post()
  async createPost(@Body() post: PostDto) {
    console.log('게시글 작성', post);

    await this.blogService.createPost(post);

    return 'success';
  }

  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() post: PostDto) {
    console.log(`[${id}] 게시글 업데이트`, post);

    await this.blogService.updatePost(id, post);

    return 'success';
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    console.log('게시글 삭제');

    await this.blogService.deletePost(id);

    return 'success';
  }
}
