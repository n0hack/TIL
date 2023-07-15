import { Models } from '../../models';

export type ContextValue = {
  models: Models;
};

export type ReadNoteArgs = {
  id: string;
};

export type CreateNoteArgs = {
  content: string;
};

export type UpdateNoteArgs = {
  id: string;
  content: string;
};

export type DeleteNoteArgs = {
  id: string;
};

export type SignUpArgs = {
  username: string;
  email: string;
  password: string;
};

export type SignInArgs = {
  username: string;
  email: string;
  password: string;
};
