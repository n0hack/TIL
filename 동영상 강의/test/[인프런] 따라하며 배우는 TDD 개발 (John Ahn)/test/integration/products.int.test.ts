import request from 'supertest';
import app from '../../server';
import newProduct from '../data/new-product.json';

test('POST /api/products', async () => {
  const response = await request(app).post('/api/products').send(newProduct);
  expect(response.statusCode).toBe(201);
  expect(response.body.name).toBe(newProduct.name);
  expect(response.body.description).toBe(newProduct.description);
});

test('should return 500 on POST /api/products', async () => {
  const response = await request(app).post('/api/products').send({ name: 'phone' });
  expect(response.statusCode).toBe(500);

  expect(response.body).toStrictEqual({
    message: 'Product validation failed: description: Path `description` is required.',
  });
});
