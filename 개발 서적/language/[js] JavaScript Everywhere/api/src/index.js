import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

const app = express();
const port = process.env.PORT || 4000;

const notes = [
  { id: '1', content: 'This is a note', author: 'Adam Scott' },
  { id: '2', content: 'This is another note', author: 'Harlow Everly' },
  { id: '3', content: 'Oh hey look, another note!', author: 'Riley Harrison' },
];

// 스키마 생성
const typeDefs = `#graphql
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

const resolvers = {
  Query: {
    hello: () => 'Hello World!',
    notes: () => notes,
    note: (parent, { id }) => notes.find((note) => note.id === id),
  },
  Mutation: {
    createNote: (parent, { content }) => {
      const newNote = {
        id: String(notes.length + 1),
        content,
        author: 'Lucid',
      };
      notes.push(newNote);
      return newNote;
    },
  },
};

// Apollo Sever 시작
const server = new ApolloServer({ typeDefs, resolvers });
await server.start();

app.get('/', (req, res) => res.send('Hello World'));
app.use('/api', express.json(), expressMiddleware(server));

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
