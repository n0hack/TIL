import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import dotenv from 'dotenv';
import db from './db';
import schema from './schema';
import models from './models';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;
const DB_HOST = process.env.DB_HOST!;

db.connect(DB_HOST);

const notes = [
  { id: '1', content: 'z', author: 'z' },
  { id: '2', content: 'y', author: 'y' },
  { id: '3', content: 'x', author: 'x' },
];

const resolvers = {
  Query: {
    hello: () => 'Hello World!',
    notes: async () => {
      return await models.Note.find();
    },
    note: async (parent: any, { id }: { id: string }) => {
      return await models.Note.findById(id);
    },
  },
  Mutation: {
    createNote: async (parent: any, { content }: { content: string }) => {
      return await models.Note.create({
        content,
        author: 'Lucid',
      });
    },
  },
};

// Apollo Sever 시작
async function runServer() {
  const server = new ApolloServer({ typeDefs: schema, resolvers });
  await server.start();

  app.use('/api', express.json(), expressMiddleware(server));

  app.listen(PORT, () => {
    console.log(`GraphQL Server running at http://localhost:${PORT}`);
  });
}
runServer();
