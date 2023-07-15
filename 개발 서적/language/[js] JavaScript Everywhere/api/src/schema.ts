export default `#graphql
  scalar DateTime

  type Note {
    id: ID!
    content: String!
    author: String!
  }

  type Query {
    hello: String
    notes: [Note!]
    note(id: ID!): Note!
  }

  type Mutation {
    createNote(content: String!): Note!
  }
`;
