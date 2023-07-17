import { ContextValue, ReadNoteArgs, ReadNoteFeedArgs, ReadUserArgs } from './types';

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
  readNoteFeed: async (parent: any, args: ReadNoteFeedArgs, { models }: ContextValue) => {
    const limit = 10;

    let hasNextPage = false;
    let cursorQuery = {};

    if (args.cursor) {
      cursorQuery = { _id: { $lt: args.cursor } };
    }

    let notes = await models.Note.find(cursorQuery)
      .sort({ _id: -1 })
      .limit(limit + 1);

    if (notes.length > limit) {
      hasNextPage = true;
      notes = notes.slice(0, -1);
    }

    const newCursor = notes[notes.length - 1]._id;

    return {
      notes,
      cursor: newCursor,
      hasNextPage,
    };
  },
};
