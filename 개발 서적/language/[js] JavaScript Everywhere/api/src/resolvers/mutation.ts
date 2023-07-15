import { ContextValue, CreateNoteArgs, DeleteNoteArgs, SignInArgs, SignUpArgs, UpdateNoteArgs } from './types';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import gravatar from '../utils/gravatar';

dotenv.config();

export default {
  createNote: async (parent: any, args: CreateNoteArgs, { models }: ContextValue) => {
    return await models.Note.create({
      content: args.content,
      author: 'Lucid',
    });
  },
  updateNote: async (parent: any, args: UpdateNoteArgs, { models }: ContextValue) => {
    return await models.Note.findByIdAndUpdate({ _id: args.id }, { $set: { content: args.content } }, { new: true });
  },
  deleteNote: async (parent: any, args: DeleteNoteArgs, { models }: ContextValue) => {
    try {
      await models.Note.findByIdAndDelete({ _id: args.id });
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
};
