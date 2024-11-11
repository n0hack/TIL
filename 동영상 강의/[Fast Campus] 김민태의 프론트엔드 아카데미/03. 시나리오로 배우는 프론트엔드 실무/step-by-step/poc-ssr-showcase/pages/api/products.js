// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default async function handler(req, res) {
  const result = await axios.get('http://api.12shop.com:3000/products');

  res.status(200).json(result.data);
}
