import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import dotenv from 'dotenv';
import db from './db';
import typeDefs from './schema';
import models from './models';
import resolvers from './resolvers';
import { ContextValue } from './resolvers/types';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;
const DB_HOST = process.env.DB_HOST!;

db.connect(DB_HOST);

// JWT로부터 유저 정보 얻기
const getUser = (token: string) => {
  if (token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET as string);
    } catch (err) {
      throw new Error('유효하지 않은 세션');
    }
  }
};

// Apollo Sever 시작
async function runServer() {
  const server = new ApolloServer<ContextValue>({ typeDefs, resolvers });
  await server.start();

  app.use(
    '/api',
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        const token = req.headers.authorization;
        const user = getUser(token as string);
        console.log(user);

        return { models, user };
      },
    })
  );

  app.listen(PORT, () => {
    console.log(`GraphQL Server running at http://localhost:${PORT}`);
  });
}
runServer();
