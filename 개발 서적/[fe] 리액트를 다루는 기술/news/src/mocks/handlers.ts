import { rest } from 'msw';
import { articles } from './data';

export const handlers = [
  rest.get('/top-headlines', (req, res, ctx) => {
    const category = (req.url.searchParams.get('category') ?? 'all') as keyof typeof articles;

    return res(ctx.status(200), ctx.json({ articles: articles[category] }));
  }),
];
