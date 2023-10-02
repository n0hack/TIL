import { Middleware } from '@koa/router';

let postId = 1;

const posts = [
  {
    id: 1,
    title: '제목',
    body: '내용',
  },
];

/**
 * 포스트 작성
 * POST /api/posts
 * { title, body }
 */
export const write: Middleware = (ctx) => {
  const { title, body } = ctx.request.body as {
    title: string;
    body: string;
  };
  postId += 1;

  const post = { id: postId, title, body };
  posts.push(post);

  ctx.body = post;
};

/**
 * 포스트 목록 조회
 * GET /api/posts
 */
export const list: Middleware = (ctx) => {
  ctx.body = posts;
};

/**
 * 특정 포스트 조회
 * GET /api/posts/:id
 */
export const read: Middleware = (ctx) => {
  const { id } = ctx.params as { id: string };
  const post = posts.find((p) => p.id.toString() === id);

  if (!post) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  ctx.body = post;
};

/**
 * 특정 포스트 제거
 * DELETE /api/posts/:id
 */
export const remove: Middleware = (ctx) => {
  const { id } = ctx.params as { id: string };
  const index = posts.findIndex((p) => p.id.toString() === id);

  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  posts.splice(index, 1);
  ctx.status = 204; // No Content
};

/**
 * 포스트 수정(교체)
 * PUT /api/posts/:id
 * { title, body }
 */
export const replace: Middleware = (ctx) => {
  const { id } = ctx.params as { id: string };
  const index = posts.findIndex((p) => p.id.toString() === id);

  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  posts[index] = {
    id,
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};

/**
 * 포스트 수정(특정 필드 변경)
 * PATCH /api/posts/:id
 * { title, body }
 */
export const update: Middleware = (ctx) => {
  const { id } = ctx.params as { id: string };
  const index = posts.findIndex((p) => p.id.toString() === id);

  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  posts[index] = {
    ...posts[index],
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};
