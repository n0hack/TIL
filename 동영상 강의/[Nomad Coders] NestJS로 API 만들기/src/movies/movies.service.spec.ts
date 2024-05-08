import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { NotFoundException } from '@nestjs/common';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  test('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    test('should return an array', () => {
      const result = service.getAll();

      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne', () => {
    test('should return a movie', () => {
      service.create({
        title: '테스트 영화',
        year: 2024,
        genres: ['Test'],
      });
      const movie = service.getOne(1);

      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    });

    test('should throw 404 error', () => {
      try {
        service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('999번 데이터가 존재하지 않습니다.');
      }
    });
  });

  describe('deleteOne', () => {
    test('delete a movie', () => {
      service.create({
        title: '테스트 영화',
        year: 2024,
        genres: ['Test'],
      });
      const beforeDelete = service.getAll().length;
      service.deleteOne(1);
      const afterDelete = service.getAll().length;
      expect(afterDelete).toBeLessThan(beforeDelete);
    });

    test('should return a 404', () => {
      try {
        service.deleteOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('999번 데이터가 존재하지 않습니다.');
      }
    });
  });

  describe('create', () => {
    test('should create a movie', () => {
      const beforeCreate = service.getAll().length;
      service.create({
        title: '테스트 영화',
        year: 2024,
        genres: ['Test'],
      });
      const afterCreate = service.getAll().length;
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  describe('update', () => {
    test('should update a movie', () => {
      service.create({
        title: '테스트 영화',
        year: 2024,
        genres: ['Test'],
      });
      service.update(1, { title: '제목 변경 테스트' });
      const movie = service.getOne(1);
      expect(movie.title).toEqual('제목 변경 테스트');
    });

    test('should throw a NotFoundException', () => {
      try {
        service.update(999, {});
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
