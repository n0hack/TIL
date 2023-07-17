import { IUser } from '../models/types';
import { ContextValue } from './types';

export default {
  notes: async (user: IUser, args: any, { models }: ContextValue) => {
    return await models.Note.find({ author: user._id }).sort({ _id: -1 });
  },
  favorites: async (user: IUser, args: any, { models }: ContextValue) => {
    return await models.Note.find({ favoritedBy: user._id }).sort({ _id: -1 });
  },
};
