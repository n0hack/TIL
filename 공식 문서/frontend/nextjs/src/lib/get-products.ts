import { cacheTag } from 'next/cache';

export async function getProducts() {
  'use cache';
  cacheTag('products');

  const products = await fetch('https://fakestoreapi.com/products');

  return products;
}
