import { ContextValue, ReadNoteArgs, ReadUserArgs } from './types';

export default {
  readNotes: async (parent: any, args: {}, { models }: ContextValue) => {
    return await models.Note.find().limit(100);
  },
  readNote: async (parent: any, args: ReadNoteArgs, { models }: ContextValue) => {
    return await models.Note.findById(args.id);
  },
  readUsers: async (parent: any, args: {}, { models }: ContextValue) => {
    return await models.User.find().limit(100);
  },
  readUser: async (parent: any, args: ReadUserArgs, { models }: ContextValue) => {
    return await models.User.findOne({ username: args.username });
  },
  readMe: async (parent: any, args: {}, { models, user }: ContextValue) => {
    return await models.User.findById(user.id);
  },
};
