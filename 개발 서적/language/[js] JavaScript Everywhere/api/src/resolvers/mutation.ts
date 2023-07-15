import { ContextValue, CreateNoteArgs, DeleteNoteArgs, SignInArgs, SignUpArgs, UpdateNoteArgs } from './types';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import gravatar from '../utils/gravatar';
import mongoose from 'mongoose';

dotenv.config();

export default {
  createNote: async (parent: any, args: CreateNoteArgs, { models, user }: ContextValue) => {
    if (!user) {
      throw new Error('You must be signed in to create a note.');
    }

    return await models.Note.create({
      content: args.content,
      author: new mongoose.Types.ObjectId(user.id),
    });
  },
  updateNote: async (parent: any, args: UpdateNoteArgs, { models, user }: ContextValue) => {
    if (!user) {
      throw new Error('You must be signed in to update a note.');
    }

    // 노트 찾기
    const note = await models.Note.findById(args.id);
    if (note && String(note.author) !== user.id) {
      throw new Error('You do not have permission to update the note.');
    }

    return await models.Note.findByIdAndUpdate({ _id: args.id }, { $set: { content: args.content } }, { new: true });
  },
  deleteNote: async (parent: any, args: DeleteNoteArgs, { models, user }: ContextValue) => {
    if (!user) {
      throw new Error('You must be signed in to delete a note.');
    }

    // 노트 찾기
    const note = await models.Note.findById(args.id);
    if (note && String(note.author) !== user.id) {
      throw new Error('You do not have permission to delete the note.');
    }

    try {
      await note?.deleteOne();
      return true;
    } catch (err) {
      return false;
    }
  },
  signUp: async (parent: any, args: SignUpArgs, { models }: ContextValue) => {
    const email = args.email.trim().toLowerCase();
    const hashed = await bcrypt.hash(args.password, 10);
    const avatar = gravatar(email);

    try {
      const user = await models.User.create({
        username: args.username,
        email,
        avatar,
        password: hashed,
      });

      // JWT 생성 및 반환
      return jwt.sign({ id: user._id }, process.env.JWT_SECRET as string);
    } catch (err) {
      console.error(err);
      throw new Error('Error creating account');
    }
  },
  signIn: async (parent: any, args: SignInArgs, { models }: ContextValue) => {
    const email = args.email.trim().toLowerCase();

    const user = await models.User.findOne({ $or: [{ email }, { username: args.username }] });
    if (!user) {
      throw new Error('존재하지 않는 회원입니다.');
    }

    const valid = await bcrypt.compare(args.password, user.password);
    if (!valid) {
      throw new Error('비밀번호가 올바르지 않습니다.');
    }

    return jwt.sign({ id: user._id }, process.env.JWT_SECRET as string);
  },
  toggleFavorite: async (parent: any, args: { id: string }, { models, user }: ContextValue) => {
    if (!user) {
      throw new Error('Error');
    }

    // 이미 즐겨찾기 했는지 확인
    const noteCheck = await models.Note.findById(args.id);
    const hasUser = noteCheck?.favoritedBy.indexOf(user.id as any) ?? -1;

    if (hasUser >= 0) {
      return await models.Note.findByIdAndUpdate(args.id, {
        $pull: {
          favoritedBy: new mongoose.Types.ObjectId(user.id),
        },
        $inc: {
          favoriteCount: -1,
        },
      });
    } else {
      return await models.Note.findByIdAndUpdate(
        args.id,
        {
          $push: {
            favoritedBy: new mongoose.Types.ObjectId(user.id),
          },
          $inc: {
            favoriteCount: 1,
          },
        },
        {
          new: true,
        }
      );
    }
  },
};
