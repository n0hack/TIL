import { NextApiRequest, NextApiResponse } from 'next';

// 사용자 행동에 따라 페이지를 재생성하는 API
// ISR은 대부분 케이스를 커버할 수 있는 강력한 렌더링 방식으로 많은 곳에서 사용되고 있다.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await res.revalidate('/');
    return res.json({ revalidate: true });
  } catch (err) {
    console.error(err);
    res.status(500).send('Revalidation Failed');
  }
}
