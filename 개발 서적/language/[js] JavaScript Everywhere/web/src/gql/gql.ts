/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation SignUp($username: String!, $email: String!, $password: String!) {\n    signUp(username: $username, email: $email, password: $password)\n  }\n": types.SignUpDocument,
    "\n  query ReadNoteFeed($cursor: String) {\n    readNoteFeed(cursor: $cursor) {\n      cursor\n      hasNextPage\n      notes {\n        author {\n          id\n          username\n          avatar\n        }\n        id\n        createdAt\n        content\n        favoriteCount\n      }\n    }\n  }\n": types.ReadNoteFeedDocument,
    "\n  query ReadNote($readNoteId: ID!) {\n    readNote(id: $readNoteId) {\n      id\n      createdAt\n      content\n      favoriteCount\n      author {\n        username\n        id\n        avatar\n      }\n    }\n  }\n": types.ReadNoteDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SignUp($username: String!, $email: String!, $password: String!) {\n    signUp(username: $username, email: $email, password: $password)\n  }\n"): (typeof documents)["\n  mutation SignUp($username: String!, $email: String!, $password: String!) {\n    signUp(username: $username, email: $email, password: $password)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ReadNoteFeed($cursor: String) {\n    readNoteFeed(cursor: $cursor) {\n      cursor\n      hasNextPage\n      notes {\n        author {\n          id\n          username\n          avatar\n        }\n        id\n        createdAt\n        content\n        favoriteCount\n      }\n    }\n  }\n"): (typeof documents)["\n  query ReadNoteFeed($cursor: String) {\n    readNoteFeed(cursor: $cursor) {\n      cursor\n      hasNextPage\n      notes {\n        author {\n          id\n          username\n          avatar\n        }\n        id\n        createdAt\n        content\n        favoriteCount\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ReadNote($readNoteId: ID!) {\n    readNote(id: $readNoteId) {\n      id\n      createdAt\n      content\n      favoriteCount\n      author {\n        username\n        id\n        avatar\n      }\n    }\n  }\n"): (typeof documents)["\n  query ReadNote($readNoteId: ID!) {\n    readNote(id: $readNoteId) {\n      id\n      createdAt\n      content\n      favoriteCount\n      author {\n        username\n        id\n        avatar\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;