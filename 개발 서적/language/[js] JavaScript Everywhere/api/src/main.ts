import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import dotenv from 'dotenv';
import db from './db';
import typeDefs from './schema';
import models from '@models';
import resolvers from '@resolvers';
import { ContextValue } from '@resolvers/types';
import jwt from 'jsonwebtoken';
import helmet from 'helmet';
import cors from 'cors';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;
const DB_HOST = process.env.DB_HOST!;

db.connect(DB_HOST);

// JWT로부터 유저 정보 얻기
const getUser = (token?: string) => {
  if (token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET!);
    } catch (err) {
      throw new Error('JWT 인증이 만료되었습니다.');
    }
  }
};

// Apollo Sever 시작
async function runServer() {
  const server = new ApolloServer<Partial<ContextValue>>({ typeDefs, resolvers });
  await server.start();

  // 일반적인 웹 취약점으로부터 보호
  app.use(helmet());
  app.use(cors());

  app.use(
    '/api',
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        const token = req.headers.authorization;
        const user = getUser(token);

        return { models, user };
      },
    })
  );

  app.listen(PORT, () => {
    console.log(`GraphQL Server running at http://localhost:${PORT}`);
  });
}
runServer();
