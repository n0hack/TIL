import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { readFile, writeFile } from 'fs/promises';
import { Model } from 'mongoose';
import { PostDto } from './blog.model';
import { Blog, BlogDocument } from './blog.schema';

export interface BlogRepository {
  getAllPosts(): Promise<PostDto[]>;
  getPost(id: string): Promise<PostDto>;
  createPost(postDto: PostDto): Promise<void>;
  updatePost(id: string, postDto: PostDto): Promise<void>;
  deletePost(id: string): Promise<void>;
}

@Injectable()
export class BlogFileRepository implements BlogRepository {
  FILE_NAME = './src/blog.data.json';

  // 게시글 목록 조회
  async getAllPosts(): Promise<PostDto[]> {
    const datas = await readFile(this.FILE_NAME, 'utf8');
    const posts = JSON.parse(datas);

    return posts;
  }

  // 게시글 상세 조회
  async getPost(id: string): Promise<PostDto> {
    const posts = await this.getAllPosts();
    const result = posts.find((post) => post.id === id);

    return result;
  }

  // 게시글 작성
  async createPost(postDto: PostDto) {
    const posts = await this.getAllPosts();
    const id = posts.length + 1;

    const createPost: PostDto = {
      id: id.toString(),
      ...postDto,
      createdAt: new Date(),
    };

    posts.push(createPost);

    await writeFile(this.FILE_NAME, JSON.stringify(posts));
  }

  // 게시물 수정
  async updatePost(id: string, postDto: PostDto) {
    const posts = await this.getAllPosts();
    const index = posts.findIndex((post) => post.id === id);

    const updatePost: PostDto = {
      id,
      ...postDto,
      updatedAt: new Date(),
    };

    posts[index] = updatePost;

    await writeFile(this.FILE_NAME, JSON.stringify(posts));
  }

  // 게시물 삭제
  async deletePost(id: string) {
    const posts = await this.getAllPosts();
    const filteredPosts = posts.filter((post) => post.id !== id);

    await writeFile(this.FILE_NAME, JSON.stringify(filteredPosts));
  }
}

@Injectable()
export class BlogMongoRepository implements BlogRepository {
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

  async getAllPosts(): Promise<Blog[]> {
    return this.blogModel.find().exec();
  }

  async getPost(id: string): Promise<Blog | null> {
    return this.blogModel.findOne({ id }).exec();
  }

  async createPost(postDto: PostDto): Promise<void> {
    const createPost = {
      ...postDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    await this.blogModel.create(createPost);
  }

  async updatePost(id: string, postDto: PostDto): Promise<void> {
    const updatePost = {
      id,
      ...postDto,
      updatedAt: new Date(),
    };
    await this.blogModel.findByIdAndUpdate(id, updatePost).exec();
  }

  async deletePost(id: string): Promise<void> {
    await this.blogModel.findByIdAndDelete(id).exec();
  }
}
