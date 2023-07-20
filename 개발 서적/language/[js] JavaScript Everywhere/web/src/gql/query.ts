import { gql } from '@apollo/client';

export const GET_NOTE_FEED = gql`
  query ReadNoteFeed($cursor: String) {
    readNoteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
        author {
          id
          username
          avatar
        }
        id
        createdAt
        content
        favoriteCount
      }
    }
  }
`;

export const GET_NOTE = gql`
  query ReadNote($readNoteId: ID!) {
    readNote(id: $readNoteId) {
      id
      createdAt
      content
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  }
`;
