import { Injectable } from '@nestjs/common';
import { PostDto } from './blog.model';
import { BlogFileRepository } from './blog.repository';

@Injectable()
export class BlogService {
  constructor(private blogRepository: BlogFileRepository) {}

  async getAllPosts() {
    return this.blogRepository.getAllPosts();
  }

  async getPost(id: string) {
    return this.blogRepository.getPost(id);
  }

  async createPost(postsDto: PostDto) {
    await this.blogRepository.createPost(postsDto);
  }

  async updatePost(id: string, postDto: PostDto) {
    await this.blogRepository.updatePost(id, postDto);
  }

  async deletePost(id: string) {
    await this.blogRepository.deletePost(id);
  }
}
