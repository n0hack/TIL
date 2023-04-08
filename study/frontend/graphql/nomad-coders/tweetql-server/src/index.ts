import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// 스키마
// Scalar Types: String, Boolean, Int, Float, ID와 같이 내장된 타입들
const typeDefs = `#graphql
  type User {
    id: ID
    username: String
  }

  type Tweet { 
    id: ID
    text: String
    author: User
  }

  type Book {
    title: String
    author: String
  }

  type Query {
    allTweets: [Tweet]
    books: [Book]
    tweets: [Tweet]
    # Arguments
    tweet(id: ID): Tweet
  }
`;

// 데이터셋
const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const tweets = [
  {
    text: 'Hello World',
  },
  {
    text: 'Hello World2',
  },
];

// 리졸버
const resolvers = {
  Query: {
    books: () => books,
    tweets: () => tweets,
  },
};

// 서버 구축
const server = new ApolloServer({ typeDefs, resolvers });
(async () => {
  const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
  console.log(`🚀  Server ready at: ${url}`);
})();
