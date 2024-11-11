// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import config from '../../config';

export default async function handler(req, res) {
  try {
    const result = await axios.get(`${config.server.b2c}/products`)

    res.status(200).json({
      data: result.data
    })
  } catch(e) {
    throw(e);
  }
}
