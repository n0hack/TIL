import { gql } from '@apollo/client';

export const GET_USERS_QUERY = gql`
  {
    usersz {
      id
      name
      username
    }
  }
`;
