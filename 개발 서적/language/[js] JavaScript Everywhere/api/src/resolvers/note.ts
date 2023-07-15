import { INote } from '../models/types';
import { ContextValue } from './types';

export default {
  author: async (note: INote, args: any, { models }: ContextValue) => {
    return await models.User.findById(note.author);
  },
  favoritedBy: async (note: INote, args: any, { models }: ContextValue) => {
    return await models.User.find({ _id: { $in: note.favoritedBy } });
  },
};
