import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const date = new Date();

  return res.status(200).json({ time: date.toLocaleString() });
}
