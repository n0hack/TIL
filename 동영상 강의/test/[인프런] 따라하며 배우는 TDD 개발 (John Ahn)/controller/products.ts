import { RequestHandler } from 'express';

const hello: RequestHandler = (req, res) => res.send('안녕하세요');

export default { hello };
