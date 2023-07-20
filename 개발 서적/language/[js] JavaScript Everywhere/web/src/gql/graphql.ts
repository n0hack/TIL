/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};

export type Mutation = {
  __typename?: 'Mutation';
  createNote: Note;
  deleteNote: Scalars['Boolean']['output'];
  signIn: Scalars['String']['output'];
  signUp: Scalars['String']['output'];
  toggleFavorite: Note;
  updateNote: Note;
};

export type MutationCreateNoteArgs = {
  content: Scalars['String']['input'];
};

export type MutationDeleteNoteArgs = {
  id: Scalars['ID']['input'];
};

export type MutationSignInArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type MutationSignUpArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type MutationToggleFavoriteArgs = {
  id: Scalars['ID']['input'];
};

export type MutationUpdateNoteArgs = {
  content: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type Note = {
  __typename?: 'Note';
  author: User;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  favoriteCount: Scalars['Int']['output'];
  favoritedBy?: Maybe<Array<User>>;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type NoteFeed = {
  __typename?: 'NoteFeed';
  cursor: Scalars['String']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  notes: Array<Maybe<Note>>;
};

export type Query = {
  __typename?: 'Query';
  readMe: User;
  readNote: Note;
  readNoteFeed?: Maybe<NoteFeed>;
  readNotes?: Maybe<Array<Note>>;
  readUser: User;
  readUsers?: Maybe<Array<User>>;
};

export type QueryReadNoteArgs = {
  id: Scalars['ID']['input'];
};

export type QueryReadNoteFeedArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
};

export type QueryReadUserArgs = {
  username: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  avatar: Scalars['String']['output'];
  email: Scalars['String']['output'];
  favorites: Array<Note>;
  id: Scalars['ID']['output'];
  notes: Array<Note>;
  username: Scalars['String']['output'];
};

export type ReadNoteFeedQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
}>;

export type ReadNoteFeedQuery = {
  __typename?: 'Query';
  readNoteFeed?: {
    __typename?: 'NoteFeed';
    cursor: string;
    hasNextPage: boolean;
    notes: Array<{
      __typename?: 'Note';
      id: string;
      createdAt: any;
      content: string;
      favoriteCount: number;
      author: { __typename?: 'User'; id: string; username: string; avatar: string };
    } | null>;
  } | null;
};

export type ReadNoteQueryVariables = Exact<{
  readNoteId: Scalars['ID']['input'];
}>;

export type ReadNoteQuery = {
  __typename?: 'Query';
  readNote: {
    __typename?: 'Note';
    id: string;
    createdAt: any;
    content: string;
    favoriteCount: number;
    author: { __typename?: 'User'; username: string; id: string; avatar: string };
  };
};

export const ReadNoteFeedDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ReadNoteFeed' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'cursor' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'readNoteFeed' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'cursor' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'cursor' } },
                { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'notes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'author' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'favoriteCount' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ReadNoteFeedQuery, ReadNoteFeedQueryVariables>;
export const ReadNoteDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ReadNote' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'readNoteId' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'readNote' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'readNoteId' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                { kind: 'Field', name: { kind: 'Name', value: 'favoriteCount' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'author' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ReadNoteQuery, ReadNoteQueryVariables>;
