import { ContextValue, ReadNoteArgs } from './types';

export default {
  readNotes: async (parent: any, args: {}, { models }: ContextValue) => {
    return await models.Note.find();
  },
  readNote: async (parent: any, args: ReadNoteArgs, { models }: ContextValue) => {
    return await models.Note.findById(args.id);
  },
};
