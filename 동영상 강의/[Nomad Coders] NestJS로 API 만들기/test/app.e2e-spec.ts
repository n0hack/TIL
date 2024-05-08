import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  // beforeEach에서 변경한 이유는 매 테스트마다 새로운 앱 인스턴스를 만들지 않기 위함
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer()).get('/').expect(200).expect('Welcome to my Movie API');
  });

  describe('/movies', () => {
    test('GET', () => {
      return request(app.getHttpServer()).get('/movies').expect(200).expect([]);
    });

    test('POST 200', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({
          title: '테스트 영화',
          genres: ['test'],
          year: 2000,
        })
        .expect(201);
    });

    test('POST 400', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({
          title: '테스트 영화',
          genres: ['test'],
          year: 2000,
          other: 'thing',
        })
        .expect(400);
    });

    test('DELETE', () => {
      return request(app.getHttpServer()).delete('/movies').expect(404);
    });
  });

  describe('/movies/:id', () => {
    test('GET 200', () => {
      return request(app.getHttpServer()).get('/movies/1').expect(200);
    });

    test('GET 404', () => {
      return request(app.getHttpServer()).get('/movies/999').expect(404);
    });

    test('UPDATE', () => {
      return request(app.getHttpServer())
        .patch('/movies/1')
        .send({
          title: 'Updated Test',
        })
        .expect(200);
    });

    test('DELETE', () => {
      return request(app.getHttpServer()).delete('/movies/1').expect(200);
    });
  });
});
