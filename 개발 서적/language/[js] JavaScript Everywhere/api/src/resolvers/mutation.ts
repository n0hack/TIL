import { ContextValue, CreateNoteArgs, DeleteNoteArgs, UpdateNoteArgs } from './types';

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
};
