import { Middleware } from '@koa/router';
import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from 'joi';

export interface Post {
  title: string;
  body: string;
  tags: string[];
}

const { ObjectId } = mongoose.Types;

// 미들웨어
export const checkObjectId: Middleware = (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }
  return next();
};

/**
 * 포스트 작성
 * POST /api/posts
 * { title, body }
 */
export const write: Middleware = async (ctx) => {
  const schema = Joi.object<Post>().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { title, body, tags } = ctx.request.body as Post;
  const post = new Post({ title, body, tags });

  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, { message: e });
  }
};

/**
 * 포스트 목록 조회
 * GET /api/posts
 */
export const list: Middleware = async (ctx) => {
  const page = parseInt((ctx.query.page as string) || '1', 10);

  if (page < 1 || Number.isNaN(page)) {
    ctx.status = 400;
    return;
  }

  try {
    const posts = await Post.find({})
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();
    const postCount = await Post.countDocuments().exec();
    ctx.set('Last-Page', Math.ceil(postCount / 10).toString());
    ctx.body = posts.map((post) => ({
      ...post,
      body: post.body?.length < 200 ? post.body : `${post.body.slice(0, 200)}...`,
    }));
  } catch (e) {
    ctx.throw(500, { message: e });
  }
};

/**
 * 특정 포스트 조회
 * GET /api/posts/:id
 */
export const read: Middleware = async (ctx) => {
  const { id } = ctx.params as { id: string };
  try {
    const post = await Post.findById(id).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, { message: e });
  }
};

/**
 * 특정 포스트 제거
 * DELETE /api/posts/:id
 */
export const remove: Middleware = async (ctx) => {
  const { id } = ctx.params as { id: string };
  try {
    await Post.findByIdAndDelete(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, { message: e });
  }
};

/**
 * 포스트 수정(특정 필드 변경)
 * PATCH /api/posts/:id
 * { title, body }
 */
export const update: Middleware = async (ctx) => {
  const { id } = ctx.params as { id: string };

  const schema = Joi.object<Post>().keys({
    title: Joi.string(),
    body: Joi.string(),
    tags: Joi.array().items(Joi.string()),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, { new: true }).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, { message: e });
  }
};
