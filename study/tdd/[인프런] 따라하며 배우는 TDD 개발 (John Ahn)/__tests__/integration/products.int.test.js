const request = require('supertest');
const app = require('../../server');
const newProduct = require('../data/new-product.json');

// 통합 테스트는 실제 DB까지 테스트
test('POST /api/products', async () => {
  const response = await request(app).post('/api/products').send(newProduct);
  expect(response.statusCode).toBe(201);
  expect(response.body.name).toBe(newProduct.name);
  expect(response.body.description).toBe(newProduct.description);
});

test('should return 500 on POST /api/products', async () => {
  const response = await request(app).post('/api/products').send({ name: 'phone' });
  expect(response.statusCode).toBe(500);
  console.log('response.body', response.body);
  expect(response.body).toStrictEqaul({ message: '' });
});
