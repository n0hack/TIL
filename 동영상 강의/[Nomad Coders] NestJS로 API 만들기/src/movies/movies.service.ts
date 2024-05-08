import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);

    if (!movie) {
      throw new NotFoundException(`${id}번 데이터가 존재하지 않습니다.`);
    }

    return movie;
  }

  deleteOne(id: number): boolean {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);

    return true;
  }

  create(movieData: CreateMovieDto): Movie {
    const id = this.movies.length === 0 ? 1 : this.movies[this.movies.length - 1].id + 1;
    const newData: Movie = {
      id,
      ...movieData,
    };
    this.movies.push(newData);

    return newData;
  }

  update(id: number, updateData: UpdateMovieDto) {
    this.getOne(id);
    this.movies = this.movies.map((movie) => (movie.id === +id ? { ...movie, ...updateData } : movie));

    return true;
  }
}
