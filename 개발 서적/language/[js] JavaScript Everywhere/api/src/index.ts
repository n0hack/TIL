import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import dotenv from 'dotenv';
import db from './db';
import typeDefs from './schema';
import models from './models';
import resolvers from './resolvers';
import { ContextValue } from './resolvers/types';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;
const DB_HOST = process.env.DB_HOST!;

db.connect(DB_HOST);

// Apollo Sever 시작
async function runServer() {
  const server = new ApolloServer<ContextValue>({ typeDefs, resolvers });
  await server.start();

  app.use(
    '/api',
    express.json(),
    expressMiddleware(server, {
      context: async () => ({
        models,
      }),
    })
  );

  app.listen(PORT, () => {
    console.log(`GraphQL Server running at http://localhost:${PORT}`);
  });
}
runServer();
