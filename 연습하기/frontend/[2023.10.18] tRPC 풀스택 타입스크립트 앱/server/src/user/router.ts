import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { users } from './db';
import { User } from './types';

export const userRouter = router({
  getUsers: publicProcedure.query(() => {
    return users;
  }),
  getUserById: publicProcedure
    .input((val: unknown) => {
      if (typeof val === 'string') return val;
      throw new Error('Invalid input');
    })
    .query((req) => {
      const { input } = req;

      const user = users.find((user) => user.id === input);
      return user;
    }),
  createUser: publicProcedure.input(z.object({ name: z.string() })).mutation((req) => {
    const { input } = req;

    const user: User = {
      id: `${Math.random()}`,
      name: input.name,
    };

    users.push(user);

    return user;
  }),
});
